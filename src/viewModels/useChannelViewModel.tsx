import { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Mapper } from '../types';
import { ChannelQueryResultRow, getChannels } from '../models/ChannelModel';
import { MainStackParamList } from '../navigation/MainStack';
import { CircleButtonProps } from '../components/CircleButton';

const mapChannelQueryResultRowToCircleButtonProps: Mapper<ChannelQueryResultRow, CircleButtonProps> = (channel) => ({
    id: channel.id,
    title: channel.name,
    size: 96,
    showImage: true,
    defaultIcon: 'tv-guide',
    onPress: () => {}
});

export const useChannelViewModel = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const [channels, setChannels] = useState<ChannelQueryResultRow[] | undefined>(undefined);
    const [warningMessage, setWarningMessage] = useState('');

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
        navigation.navigate('Schedule', { id, name });
    };

    return {
        channels,
        warningMessage,
        handleChannelSelection,
        mapChannelQueryResultRowToCircleButtonProps
    };
};
