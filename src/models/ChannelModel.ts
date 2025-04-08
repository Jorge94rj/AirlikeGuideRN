import { QueryResultRow } from 'react-native-nitro-sqlite';
import { executeQuery, isDBImported } from '../utils/dbHandler';

interface Channel {
    id: number;
    name: string;
    thumbnail: string;
    icon: string;
    fanart: string;        
}

export type ChannelQueryResultRow = QueryResultRow & Channel;

const GET_CHANNELS_QUERY = 'SELECT id, name, thumbnail, icon, fanart FROM channel';

export const getChannels = async (): Promise<ChannelQueryResultRow[] | undefined> => {
    const isDbImported = await isDBImported();
    if (isDbImported) {
        const queryResult = await executeQuery(GET_CHANNELS_QUERY) as ChannelQueryResultRow[];
        if (queryResult?.length == 0) {
            throw new Error('No channels were found');
        }
        return queryResult;
    } else {
        throw new Error('DB not found, please import a .db file');
    }
};
