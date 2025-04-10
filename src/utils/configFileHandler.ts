import RNFS from 'react-native-fs';

const filePath = `${RNFS.DocumentDirectoryPath}/config.txt`;

export enum Settings {
    HideChannelLogos = 'hide_chn_logos',
    HideChannelNames = 'hide_chn_names',
    HideMedia = 'hide_media',
}

export type AppSettings = Record<Settings, boolean>;

const currentSettings: AppSettings = {
    [Settings.HideChannelLogos]: false,
    [Settings.HideChannelNames]: false,
    [Settings.HideMedia]: false,
};

export const getSettings = async (): Promise<AppSettings> => {
    const fileExists = await RNFS.exists(filePath);

    if (!fileExists) {
        await RNFS.writeFile(filePath, JSON.stringify(currentSettings));
    }

    const file = await RNFS.readFile(filePath);
    const parsedData = JSON.parse(file) as AppSettings;

    return { ...currentSettings, ...parsedData };
};

export const saveSettings = async (settings: AppSettings | undefined) => {
    if (settings) {
        await RNFS.writeFile(filePath, JSON.stringify(settings));
    }
};
