import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Mapper } from '../types';
import { ChannelQueryResultRow, getChannels } from '../models/ChannelModel';
import { MainStackParamList, Screens } from '../navigation/MainStack';
import { CircleButtonProps } from '../components/CircleButton';
import { useSettingsContext } from '../contexts/SettingsContext';
import { Settings } from '../utils/configFileHandler';

const mapChannelQueryResultRowToCircleButtonProps: Mapper<ChannelQueryResultRow, CircleButtonProps> = (channel) => ({
    id: channel.id,
    title: channel.name,
    size: 96,
    showImage: true,
    defaultIcon: 'tv-guide',
    onPress: () => {}
});

export const useChannelViewModel = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const { settings } = useSettingsContext();

    const [channels, setChannels] = useState<ChannelQueryResultRow[] | undefined>(undefined);
    const [warningMessage, setWarningMessage] = useState('');

    const hideChannelLogos = settings[Settings.HideChannelLogos];
    const hideChannelNames = settings[Settings.HideChannelNames];

    useFocusEffect(
        useCallback(() => {
            void (async () => {
                try {
                    setWarningMessage('');
                    setChannels(await getChannels());
                } catch (err: unknown) {
                    if (err instanceof Error) {
                        setWarningMessage(err.message);
                    }
                }
            })();
        }, [])
    );

    const handleChannelSelection = (id: number) => {
        const { name } = channels?.find(channel => channel.id === id) ?? {};
        navigate(Screens.Airing, { id, name });
    };

    return {
        hideChannelLogos,
        hideChannelNames,
        channels,
        warningMessage,
        handleChannelSelection,
        mapChannelQueryResultRowToCircleButtonProps
    };
};
