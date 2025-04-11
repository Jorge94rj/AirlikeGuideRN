import Config from 'react-native-config';
import { executeQuery } from '../utils/dbHandler';
import { httpGet } from '../utils/apiHandler';
import { 
    ContentBlockQueryResultRow,
    ContentBlockWithImageQueryResultRow,
    SearchTvSeriesResponse 
} from './types';

const { TMDB_BASE_URL, TMDB_IMG_URL, TMDB_TOKEN } = Config;

const GET_SCHEDULE_QUERY = `
    SELECT b.name, b.start_time, b.end_time FROM channel_day_block cdb
    INNER JOIN channel_day cd ON cdb.channel_day_id = cd.id
    INNER JOIN block b ON cdb.block_id = b.id
    WHERE channel_id = ? and cd.day_id = ?
`;

export const getSchedule = async (channelId: number, dayId: number): Promise<ContentBlockQueryResultRow[] | undefined> => {
    return (await executeQuery(GET_SCHEDULE_QUERY, [channelId, dayId])) as ContentBlockQueryResultRow[];
};

export const getScheduleWithImages = async (
    channelId: number,
    dayId: number
): Promise<ContentBlockWithImageQueryResultRow[] | undefined> => {
    const scheduleResult = (await getSchedule(channelId, dayId)) as ContentBlockWithImageQueryResultRow[];
    for (let i = 0; i < scheduleResult.length; i++) {
        const row = scheduleResult[i];
        const { results } = await httpGet<SearchTvSeriesResponse>(`${TMDB_BASE_URL}?query=${row.name}`, TMDB_TOKEN);

        if (!results) {
            continue;
        }

        const { poster_path } = results[0] ?? {};
        scheduleResult[i].image = `${TMDB_IMG_URL}${poster_path}`;
    }
    return scheduleResult;
};
