import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList, Screens } from '../navigation/MainStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { mapDBWeedkayIdToWeekdayName, mapJsWeekdayToDBWeekdayId } from '../utils/dateHelpers';
import { getCurrentContent, getCurrentContentWithInfo } from '../models/AiringModel';
import { useGlobalLoader } from '../contexts/GlobalLoaderContext';
import { ContentBlockQueryResultRow, ContentBlockWithInfoQueryResultRow } from '../models/types';
import { useSettingsContext } from '../contexts/SettingsContext';
import { Settings } from '../utils/configFileHandler';

export const useAiringViewModel = () => {
    const { navigate, goBack } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const { params } = useRoute<RouteProp<MainStackParamList, 'Airing'>>();
    const { id, name } = params;

    const { showGlobalLoader, hideGlobalLoader } = useGlobalLoader();
    const { settings } = useSettingsContext();

    const [scheduleDay, setScheduleDay] = useState(new Date().getDay());
    const [contentBlockInfo, setContentBlockInfo] = useState<ContentBlockQueryResultRow | ContentBlockWithInfoQueryResultRow>({
        name: '',
        start_time: '',
        end_time: '',
        image: '',
        overview: ''
    });

    const DBDayId = mapJsWeekdayToDBWeekdayId[scheduleDay];
    const weekdayName = mapDBWeedkayIdToWeekdayName[DBDayId];

    const hideChannelName = settings[Settings.HideChannelNames];
    const hideMedia = settings[Settings.HideMedia];

    useEffect(() => {
        void (async () => {
            showGlobalLoader();

            let contentInfo;
            if (hideMedia) {
                contentInfo = await getCurrentContent(id, DBDayId);
            } else {
                contentInfo = await getCurrentContentWithInfo(id, DBDayId);
            }

            setContentBlockInfo(contentInfo);
            hideGlobalLoader();
        })();
    }, []);

    const handleDaySelection = (dayId: number) => {
        setScheduleDay(dayId);
    };

    const onSeeSchedulePress = () => {
        navigate(Screens.Schedule, { id, name, dayId: scheduleDay });
    };

    return {
        hideChannelName,
        channelName: name,
        weekdayName,
        scheduleDay,
        contentBlockInfo,
        handleDaySelection,
        onSeeSchedulePress,
        goBack
    };
};
