import { useCallback, useState } from 'react';
import { ChannelQueryResultRow, getChannels } from '../model/ChannelModel';
import { useFocusEffect } from '@react-navigation/native';

export const useChannelViewModel = () => {
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

    return {
        channels,
        warningMessage
    };
};
