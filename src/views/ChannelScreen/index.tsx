import { Text, View } from 'react-native';
import { styles } from './index.styles';
import { useChannelViewModel } from '../../viewModels/useChannelViewModel';
import { globalStyles } from '../../styles/global';
import CircleButton from '../../components/CircleButton';

const ChannelScreen = () => {
    const {
        // hideChannelLogos,
        hideChannelNames, 
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
                                title={hideChannelNames ? '' : channel.name}
                                // image={hideChannelLogos ? '' : channel.icon}
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

export default ChannelScreen;
