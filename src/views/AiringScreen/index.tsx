import { Pressable, ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import Navbar from '../../components/Navbar';
import { useAiringViewModel } from '../../viewModels/useAiringViewModel';
import ImageWrapper from '../../components/ImageWrapper';
import { styles } from './index.styles';
import DayPicker from '../../components/DayPicker';

const AiringScreen = () => {
    const { 
        channelName,
        weekdayName,
        scheduleDay,
        contentBlockInfo,
        handleDaySelection,
        onSeeSchedulePress,
        goBack
    } = useAiringViewModel();

    const { name, start_time, end_time, overview, image } = contentBlockInfo ?? {};

    const { screenContainer } = globalStyles;
    
    const {
        titleContainer,
        descriptionContainer,
        overviewText,
        tvShowName,
        rangeHour,
        imageContainer,
        overviewScrollContainer,
        scheduleContainer,
        seeScheduleText 
    } = styles;

    return (
        <>
            <Navbar
                title='Airing now on'
                subTitle={channelName}
                onPress={goBack}
            />
            <View style={screenContainer}>
                <View style={titleContainer}>
                    <Text style={tvShowName}>{name}</Text>
                    <Text style={rangeHour}>{`${start_time} - ${end_time}`}</Text>
                </View>
                <View style={descriptionContainer}>
                    <View style={imageContainer}>
                        <ImageWrapper uri={image} width={128} height={128} defaultFallbackIcon='video' fallbackIconSize={96} />
                    </View>
                    <ScrollView style={overviewScrollContainer} showsVerticalScrollIndicator={true}>
                        <Text style={overviewText}>{overview ? overview : 'No description avaliable'}</Text>
                    </ScrollView>
                </View>
                <View style={scheduleContainer}>
                    <DayPicker 
                        title="Schedule"
                        textStyle={{ fontWeight: 'bold' }}
                        daySelectedByDefault={scheduleDay}
                        onDaySelected={handleDaySelection} 
                    />
                    {weekdayName && (
                        <Pressable onPress={onSeeSchedulePress}>
                            <Text style={seeScheduleText}>see {weekdayName}'s schedule</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </>
    );
};

export default AiringScreen;
