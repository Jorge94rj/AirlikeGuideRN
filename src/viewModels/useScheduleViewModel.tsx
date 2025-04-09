import { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ListMapper } from '../types';
import { MainStackParamList } from '../navigation/MainStack';
import { getScheduleWithImages, ScheduleWithImagesQueryResultRow } from '../models/ScheduleModel';
import { isCurrentTimeBetweenRange, mapDBWeedkayIdToWeekdayName, mapJsWeekdayToDBWeekdayId } from '../utils/dateHelpers';
import { ItemProps } from '../components/ItemList';

const mapScheduleQueryResultListToItemListProps: ListMapper<ScheduleWithImagesQueryResultRow, ItemProps> = (schedule) => {
    return schedule?.map(item => ({
        title: item.name,
        description: `${item.start_time} - ${item.end_time}`,
        image: item.image,
        defaultIcon: 'video',
        active: isCurrentTimeBetweenRange(item.start_time, item.end_time)
    }));
};

export const useScheduleViewModel = () => {
    const { params } = useRoute<RouteProp<MainStackParamList, 'Schedule'>>();
    const { id, name } = params;

    const [scheduleList, setScheduleList] = useState<ItemProps[]>();

    const dayId = mapJsWeekdayToDBWeekdayId[new Date().getDay()];
    const weekdayName = mapDBWeedkayIdToWeekdayName[dayId];

    useEffect(() => {
        void (async () => {
            const scheduleResult = await getScheduleWithImages(id, dayId);
            const itemProps = mapScheduleQueryResultListToItemListProps(scheduleResult);
            setScheduleList(itemProps);
        })();

    }, []);

    return {
        channelName: name,
        weekdayName,
        scheduleList
    };
};
