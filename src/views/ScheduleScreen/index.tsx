import { Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useScheduleViewModel } from '../../viewModels/useScheduleViewModel';
import { styles } from './index.styles';
import ItemList from '../../components/ItemList';

const ScheduleScreen = () => {
    const {  channelName, weekdayName, scheduleList } = useScheduleViewModel();

    const { screenContainer, screenTitle } = globalStyles;

    const { descriptionContainer, channelTitle } = styles;

    return (
        <View style={{ ...screenContainer, padding: 0 }}>
            <View style={descriptionContainer}>
                <Text style={screenTitle}>Schedule for {weekdayName}</Text>
                <Text style={channelTitle}>{channelName}</Text>
            </View>
            <ItemList list={scheduleList} />
        </View>
    );
};

export default ScheduleScreen;
