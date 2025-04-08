import { Text, View } from 'react-native';
import { styles } from './index.styles';
import { useChannelViewModel } from '../../viewModels/useChannelViewModel';
import { globalStyles } from '../../styles/global';
import CircleButton from '../../components/CircleButton';

const Channel = () => {
    const { 
        channels,
        warningMessage,
        handleChannelSelection,
        mapChannelQueryResultRowToCircleButtonProps
    } = useChannelViewModel();

    const { screenContainer, screenTitle } = globalStyles;

    const {
        channelsContainer,
        warningContainer,
        warningText
    } = styles;

    return (
        <View style={screenContainer}>
            <Text style={screenTitle}>Channels</Text>

            {(channels && channels?.length > 0) && (
                <View style={channelsContainer}>
                    {channels?.map(channel => {
                        const circleButtonProps = mapChannelQueryResultRowToCircleButtonProps(channel);
                        return (
                            <CircleButton
                                {...circleButtonProps}
                                key={channel.id}
                                onPress={handleChannelSelection}
                            />
                        );
                    })}
                </View>
            )}

            {warningMessage && (
                <View style={warningContainer}>
                    <Text style={warningText}>{warningMessage}</Text>
                </View>
            )}
        </View>
    );
};

export default Channel;
