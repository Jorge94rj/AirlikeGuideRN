import { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ListMapper } from '../types';
import { MainStackParamList } from '../navigation/MainStack';
import { getSchedule, getScheduleWithImages } from '../models/ScheduleModel';
import { isCurrentTimeBetweenRange, mapDBWeedkayIdToWeekdayName, mapJsWeekdayToDBWeekdayId } from '../utils/dateHelpers';
import { ItemProps } from '../components/ItemList';
import { useGlobalLoader } from '../contexts/GlobalLoaderContext';
import { ContentBlockQueryResultRow, ContentBlockWithImageQueryResultRow } from '../models/types';
import { useSettingsContext } from '../contexts/SettingsContext';
import { Settings } from '../utils/configFileHandler';

const mapScheduleQueryResultListToItemListProps: 
ListMapper<ContentBlockQueryResultRow, ItemProps> = (schedule) => {
    return schedule?.map((item) => ({
        title: item.name,
        description: `${item.start_time} - ${item.end_time}`,
        defaultIcon: 'video',
        active: isCurrentTimeBetweenRange(item.start_time, item.end_time)
    }));
};

const mapScheduleWithImagesQueryResultListToItemListProps: 
ListMapper<ContentBlockWithImageQueryResultRow, ItemProps> = (schedule) => {
    return schedule?.map((item) => ({
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
    const { settings } = useSettingsContext();

    const [scheduleList, setScheduleList] = useState<ItemProps[]>();

    const DBDayId = mapJsWeekdayToDBWeekdayId[dayId ?? 0];
    const weekdayName = mapDBWeedkayIdToWeekdayName[DBDayId];

    const hideChannelName = settings[Settings.HideChannelNames];
    const hideMedia = settings[Settings.HideMedia];

    useEffect(() => {
        void (async () => {
            showGlobalLoader();

            let scheduleResult;
            let itemProps;
            if (hideMedia) {
                scheduleResult = await getSchedule(id, DBDayId);
                itemProps = mapScheduleQueryResultListToItemListProps(scheduleResult);
            } else {
                scheduleResult = await getScheduleWithImages(id, DBDayId);
                itemProps = mapScheduleWithImagesQueryResultListToItemListProps(scheduleResult);
            }

            setScheduleList(itemProps);
            hideGlobalLoader();
        })();

    }, []);

    return {
        hideChannelName,
        channelName: name,
        weekdayName,
        scheduleList,
        goBack
    };
};
