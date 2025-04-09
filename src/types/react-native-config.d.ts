declare module 'react-native-config' {
    export interface APIConfig {
        TMDB_BASE_URL?: string;
        TMDB_IMG_URL?: string;
        TMDB_TOKEN?: string;
    }

    export const Config: APIConfig;
    export default Config;
}
