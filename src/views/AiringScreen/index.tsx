import { Pressable, ScrollView, Text, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import { styles } from './index.styles';
import { useAiringViewModel } from '../../viewModels/useAiringViewModel';
import Navbar from '../../components/Navbar';
import ImageWrapper from '../../components/ImageWrapper';
import DayPicker from '../../components/DayPicker';

const AiringScreen = () => {
    const {
        hideChannelName, 
        channelName,
        weekdayName,
        scheduleDay,
        contentBlockInfo,
        handleDaySelection,
        onSeeSchedulePress,
        goBack
    } = useAiringViewModel();

    const { name, start_time, end_time, image, overview } = contentBlockInfo;

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
                subTitle={hideChannelName ? '' : channelName}
                onPress={goBack}
            />
            <View style={screenContainer}>
                <View style={titleContainer}>
                    <Text style={tvShowName}>{name}</Text>
                    <Text style={rangeHour}>{`${start_time} - ${end_time}`}</Text>
                </View>
                <View style={descriptionContainer}>
                    <View style={imageContainer}>
                        <ImageWrapper 
                            uri={image as string}
                            width={128}
                            height={128}
                            defaultFallbackIcon='video'
                            fallbackIconSize={96} 
                        />
                    </View>
                    <ScrollView style={overviewScrollContainer} showsVerticalScrollIndicator={true}>
                        <Text style={overviewText}>
                            {overview ? overview as string : 'No description avaliable'}
                        </Text>
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
