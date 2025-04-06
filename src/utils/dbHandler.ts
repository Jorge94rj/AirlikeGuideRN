import { pick, keepLocalCopy, LocalCopyResponse } from '@react-native-documents/picker';
import { open, QueryResultRow } from 'react-native-nitro-sqlite';
import RNFS from 'react-native-fs';

const DB_NAME = 'airlike.db';
const DB_DIR_NAME = 'SQLite';
const DB_DIR_PATH = `${RNFS.DocumentDirectoryPath}/${DB_DIR_NAME}`;
const DB_FILE_PATH = `${DB_DIR_PATH}/${DB_NAME}`;

export type ImportDBStatus = 'imported' | 'error' | 'fileNotSupported';

export const importDB = async (): Promise<ImportDBStatus> => {
    try {
        const [{ uri, nativeType }] = await pick({ type: 'application/octet-stream' });

        if (nativeType !== 'application/octet-stream') {
            return 'fileNotSupported';
        }

        const [copyResult] = await keepLocalCopy({
            files: [
                {
                    uri,
                    fileName: DB_NAME,
                },
            ],
            destination: 'documentDirectory',
        });

        const { status, localUri } = copyResult as LocalCopyResponse & {localUri: string};

        const existsDir = await RNFS.exists(DB_DIR_PATH);

        if (!existsDir) {
            await RNFS.mkdir(DB_DIR_PATH);
        }

        await RNFS.copyFile(localUri, DB_FILE_PATH);
        await RNFS.unlink(localUri);

        return status === 'success' ? 'imported' : 'error';
    } catch (err: unknown) {
        console.error(err);
        return 'error';
    }
};

export const isDBImported = async (): Promise<boolean> => {
    return await RNFS.exists(DB_FILE_PATH);
};

export async function executeQuery(query: string): Promise<QueryResultRow[] | undefined> {
    try {
        const db = open({ name: DB_NAME, location: DB_DIR_NAME });
        const results = await db.executeAsync(query);
        db.close();
        return results.rows?._array;
    } catch (err: unknown) {
        console.error(err);
    }
}
