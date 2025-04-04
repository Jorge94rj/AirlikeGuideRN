import { pick, keepLocalCopy, LocalCopyResponse } from '@react-native-documents/picker';
import { open } from 'react-native-nitro-sqlite';
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

export const isDBImported = async () => {
    return await RNFS.exists(DB_FILE_PATH);
};

export const openDB = async () => {
    try {
        const db = open({ name: DB_NAME, location: DB_DIR_NAME });
        const results = await db.executeAsync('SELECT * FROM media LIMIT 10');
        console.log('RESULTS=>', results.rows);
    } catch (err: unknown) {
        console.error(err);
    }
};
