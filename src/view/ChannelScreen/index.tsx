import { Text, View } from 'react-native';
import { styles } from './index.styles';
import { useChannelViewModel } from '../../viewModel/useChannelViewModel';

// Blocks info
// https://developer.themoviedb.org/reference/search-tv

const Channel = () => {
    const { channels, warningMessage } = useChannelViewModel();

    const { screenContainer, title, warningContainer, warningText } = styles;

    return (
        <View style={screenContainer}>
            <Text style={title}>Channels</Text>

            {channels?.map(channel => (
                <Text key={channel.id} style={warningText}>{channel.name}</Text>
            ))}

            {warningMessage && (
                <View style={warningContainer}>
                    <Text style={warningText}>{warningMessage}</Text>
                </View>
            )}
        </View>
    );
};

export default Channel;
