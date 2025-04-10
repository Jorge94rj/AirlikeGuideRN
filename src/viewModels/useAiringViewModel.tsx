import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../navigation/MainStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { mapDBWeedkayIdToWeekdayName, mapJsWeekdayToDBWeekdayId } from '../utils/dateHelpers';
import { getCurrentContentWithInfo } from '../models/AiringModel';
import { useGlobalLoader } from '../contexts/GlobalLoaderContext';
import { ContentBlockWithInfoQueryResultRow } from '../models/types';

export const useAiringViewModel = () => {
    const { navigate, goBack } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const { params } = useRoute<RouteProp<MainStackParamList, 'Airing'>>();
    const { id, name } = params;

    const { showGlobalLoader, hideGlobalLoader } = useGlobalLoader();

    const [scheduleDay, setScheduleDay] = useState(new Date().getDay());
    const [contentBlockInfo, setContentBlockInfo] = useState<ContentBlockWithInfoQueryResultRow>();

    const DBDayId = mapJsWeekdayToDBWeekdayId[scheduleDay];
    const weekdayName = mapDBWeedkayIdToWeekdayName[DBDayId];

    useEffect(() => {
        void (async () => {
            showGlobalLoader();
            const contentInfo = await getCurrentContentWithInfo(id, DBDayId);
            setContentBlockInfo(contentInfo);
            hideGlobalLoader();
        })();
    }, []);

    const handleDaySelection = (dayId: number) => {
        setScheduleDay(dayId);
    };

    const onSeeSchedulePress = () => {
        navigate('Schedule', { id, name, dayId: scheduleDay });
    };

    return {
        channelName: name,
        weekdayName,
        scheduleDay,
        contentBlockInfo,
        handleDaySelection,
        onSeeSchedulePress,
        goBack
    };
};
