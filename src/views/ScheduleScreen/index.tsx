import { View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { useScheduleViewModel } from '../../viewModels/useScheduleViewModel';
import Navbar from '../../components/Navbar';
import ItemList from '../../components/ItemList';

const ScheduleScreen = () => {
    const { channelName, weekdayName, scheduleList, goBack } = useScheduleViewModel();

    const { screenContainer } = globalStyles;

    return (
        <View style={{ ...screenContainer, padding: 0 }}>
            <Navbar 
                title={`Schedule for ${weekdayName}`}
                subTitle={channelName}
                onPress={goBack} 
            />
            <ItemList list={scheduleList} />
        </View>
    );
};

export default ScheduleScreen;
