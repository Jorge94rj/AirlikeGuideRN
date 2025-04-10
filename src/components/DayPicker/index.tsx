import { Pressable, StyleProp, Text, TextStyle, View } from 'react-native';
import { styles } from './index.styles';
import { useState } from 'react';

type DayPickerProps = {
    title: string;
    onDaySelected: (_dayId: number) => void;
    daySelectedByDefault?: number;
    textStyle?: StyleProp<TextStyle>;
};

const days: Record<number, string> = {
    0: 'S',
    1: 'M',
    2: 'T',
    3: 'W',
    4: 'TH',
    5: 'F',
    6: 'S',
};

const DayPicker = ({ title, onDaySelected, daySelectedByDefault, textStyle }: DayPickerProps) => {
    const [daySelected, setDaySelected] = useState(daySelectedByDefault ?? -1);

    const {
        titleText, 
        daysContainer,
        dayItemContainer,
        dayItemContainerActive,
        dayItemText,
        dayItemTextActive 
    } = styles;

    const handleDaySelection = (key: number) => {
        setDaySelected(key);
        onDaySelected(key);
    };

    return (
        <>
            <Text style={[titleText, textStyle]}>{title}</Text>
            <View style={daysContainer}>
                {Object.keys(days).map((key) => {
                    const parsedKey = parseInt(key);
                    const dayAbbr = days[parsedKey];
                    const isDayActive = daySelected === parsedKey;

                    return (
                        <Pressable
                            key={parsedKey} 
                            style={[dayItemContainer, isDayActive  && dayItemContainerActive]} 
                            onPress={() => handleDaySelection(parsedKey)}
                        >
                            <Text style={[dayItemText, isDayActive && dayItemTextActive]}>{dayAbbr}</Text>
                        </Pressable>
                    );
                })}
            </View>
        </>
    );
};

export default DayPicker;
