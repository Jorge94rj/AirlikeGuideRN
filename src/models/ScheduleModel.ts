import { QueryResultRow } from 'react-native-nitro-sqlite';
import { executeQuery } from '../utils/dbHandler';

// Blocks info
// https://developer.themoviedb.org/reference/search-tv

interface Schedule {
    name: string;
    start_time: string;
    end_time: string;
}

export type ScheduleQueryResultRow = QueryResultRow & Schedule;

export type ScheduleWithImagesQueryResultRow = ScheduleQueryResultRow & {image: string};

const GET_SCHEDULE_QUERY = `
    SELECT b.name, b.start_time, b.end_time FROM channel_day_block cdb
    INNER JOIN channel_day cd ON cdb.channel_day_id = cd.id
    INNER JOIN block b ON cdb.block_id = b.id
    WHERE channel_id = ? and cd.day_id = ?
`;

export const getSchedule = async (channelId: number, dayId: number): Promise<ScheduleQueryResultRow[] | undefined> => {
    return await executeQuery(GET_SCHEDULE_QUERY, [channelId, dayId]) as ScheduleQueryResultRow[];
};

export const getScheduleWithImages = async (channelId: number, dayId: number): Promise<ScheduleWithImagesQueryResultRow[] | undefined> => {
    const scheduleResult = await getSchedule(channelId, dayId) as ScheduleWithImagesQueryResultRow[];
    return scheduleResult.map(row => {
        const image = '';
        
        return {
            ...row,
            image
        };
    });
};
