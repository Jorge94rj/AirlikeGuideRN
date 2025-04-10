import { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ListMapper } from '../types';
import { MainStackParamList } from '../navigation/MainStack';
import { getScheduleWithImages } from '../models/ScheduleModel';
import { isCurrentTimeBetweenRange, mapDBWeedkayIdToWeekdayName, mapJsWeekdayToDBWeekdayId } from '../utils/dateHelpers';
import { ItemProps } from '../components/ItemList';
import { useGlobalLoader } from '../contexts/GlobalLoaderContext';
import { ContentBlockWithImageQueryResultRow } from '../models/types';

const mapScheduleQueryResultListToItemListProps: ListMapper<ContentBlockWithImageQueryResultRow, ItemProps> = (schedule) => {
    return schedule?.map(item => ({
        title: item.name,
        description: `${item.start_time} - ${item.end_time}`,
        image: item.image,
        defaultIcon: 'video',
        active: isCurrentTimeBetweenRange(item.start_time, item.end_time)
    }));
};

export const useScheduleViewModel = () => {
    const { goBack } = useNavigation();
    const { params } = useRoute<RouteProp<MainStackParamList, 'Schedule'>>();
    const { id, name, dayId } = params;

    const { showGlobalLoader, hideGlobalLoader } = useGlobalLoader();

    const [scheduleList, setScheduleList] = useState<ItemProps[]>();

    const DBDayId = mapJsWeekdayToDBWeekdayId[dayId ?? 0];
    const weekdayName = mapDBWeedkayIdToWeekdayName[DBDayId];

    useEffect(() => {
        void (async () => {
            showGlobalLoader();
            const scheduleResult = await getScheduleWithImages(id, DBDayId);
            const itemProps = mapScheduleQueryResultListToItemListProps(scheduleResult);
            setScheduleList(itemProps);
            hideGlobalLoader();
        })();

    }, []);

    return {
        channelName: name,
        weekdayName,
        scheduleList,
        goBack
    };
};
