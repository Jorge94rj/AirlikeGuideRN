import { QueryResultRow } from 'react-native-nitro-sqlite';

interface ContentBlock {
    name: string;
    start_time: string;
    end_time: string;
}

export type ContentBlockQueryResultRow = QueryResultRow & ContentBlock;

export type ContentBlockWithImageQueryResultRow = ContentBlockQueryResultRow & { image: string };

export type ContentBlockWithInfoQueryResultRow = ContentBlockWithImageQueryResultRow & { overview: string };

export type TvSeries = {
    overview: string;
    poster_path: string;
}

export type SearchTvSeriesResponse = {
    results: TvSeries[];
}
