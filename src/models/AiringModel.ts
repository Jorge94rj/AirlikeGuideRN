import Config from 'react-native-config';
import { executeQuery } from '../utils/dbHandler';
import { httpGet } from '../utils/apiHandler';
import { getCurrentTimeFormatted } from '../utils/dateHelpers';
import { 
    ContentBlockQueryResultRow,
    ContentBlockWithInfoQueryResultRow,
    SearchTvSeriesResponse 
} from './types';

const { TMDB_BASE_URL, TMDB_IMG_URL, TMDB_TOKEN } = Config;

const GET_CURRENT_CONTENT_QUERY = `
    SELECT b.name, b.start_time, b.end_time FROM channel_day_block cdb
    INNER JOIN channel_day cd ON cdb.channel_day_id = cd.id
    INNER JOIN block b ON cdb.block_id = b.id
    WHERE channel_id = ? and cd.day_id = ?
	AND ? >= b.start_time AND ? <= b. end_time
`;

export const getCurrentContent = async (channelId: number, dayId: number): Promise<ContentBlockQueryResultRow> => {
    const currentTimeFormatted = getCurrentTimeFormatted();
    const contentResult = (await executeQuery(GET_CURRENT_CONTENT_QUERY, [
        channelId,
        dayId,
        currentTimeFormatted,
        currentTimeFormatted,
    ])) as ContentBlockQueryResultRow[];

    return contentResult ? contentResult[0] : { name: '', start_time: '', end_time: '' };
};

export const getCurrentContentWithInfo = async (channelId: number, dayId: number): Promise<ContentBlockWithInfoQueryResultRow> => {
    const content = await getCurrentContent(channelId, dayId);
    const { results } = await httpGet<SearchTvSeriesResponse>(`${TMDB_BASE_URL}?query=${content.name}`, TMDB_TOKEN);
    
    if (!results) {
        return { name: '', start_time: '', end_time: '', image: '', overview: '' };
    }

    const { overview, poster_path } = results[0] ?? {};
    content.overview = overview;
    content.image = `${TMDB_IMG_URL}${poster_path}`;
    
    return content as ContentBlockWithInfoQueryResultRow;
};
