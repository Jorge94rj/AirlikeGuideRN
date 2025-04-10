import { useEffect, useState } from 'react';
import { ToggleEvent } from '../components/Toggle';
import { AppSettings, getSettings, saveSettings, Settings } from '../utils/configFileHandler';
import { useNavigation } from '@react-navigation/native';
import { showDefaultToast } from '../utils/toastHandler';

export const useSettingsViewModel = () => {
    const { goBack } = useNavigation();

    const [settings, setSetings] = useState<AppSettings>();

    useEffect(() => {
        void (async () => {
            setSetings(await getSettings());
        })();
    }, []);

    const toggleHandler = ({ id, value }: ToggleEvent) => {
        if (settings) {
            settings[id as Settings] = value;
        }
    };

    const saveChangesHandler = async () => {
        await saveSettings(settings);
        showDefaultToast('Changes saved succesfully');
    };

    return {
        settings,
        goBack,
        toggleHandler,
        saveChangesHandler
    };
};
