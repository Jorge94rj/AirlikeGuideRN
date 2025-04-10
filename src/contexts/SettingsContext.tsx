import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { AppSettings, getSettings, Settings } from '../utils/configFileHandler';

type SettingsContextProviderProps = {
    children: ReactNode;
};

type SettingsObj = {
    settings: AppSettings,
    setSettings: (settings: AppSettings) => void;
}

const defaultSettings: AppSettings = {
    [Settings.HideChannelLogos]: false,
    [Settings.HideChannelNames]: false,
    [Settings.HideMedia]: false,
};

const SettingsContext = createContext<SettingsObj>({
    settings: defaultSettings,
    setSettings: () => { }
});

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: SettingsContextProviderProps) => {
    const [settings, setSettings] = useState(defaultSettings);

    useEffect(() => {
        void (async () => {
            setSettings(await getSettings());
        })();
    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
