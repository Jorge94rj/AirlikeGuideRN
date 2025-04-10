import { useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { styles } from './index.styles';

export type ToggleEvent = {
    id: string;
    value: boolean;
};

type ToggleProps = {
    id: string;
    title: string;
    defaultValue?: boolean;
    onChange?: (event: ToggleEvent) => void;
};

const Toggle = ({ id, title, defaultValue = false, onChange }: ToggleProps) => {
    const [enabled, setEnabled] = useState(defaultValue);

    useEffect(() => {
        setEnabled(defaultValue);
    }, [defaultValue]);

    const onChangeHandler = () => {
        setEnabled((prevState) => {
            const newValue = !prevState;
            onChange && onChange({ id, value: newValue });
            return newValue;
        });
    };

    const {
        toggleContainer,
        titleStyle,
        toggleDisabled,
        toggleEnabled,
        thumbColorEnabled,
        thumbColorDisabled,
    } = styles;

    return (
        <View style={toggleContainer}>
            <Text style={titleStyle}>{title}</Text>
            <Switch
                trackColor={{
                    false: toggleDisabled.color,
                    true: toggleEnabled.color
                }}
                thumbColor={
                    enabled
                        ? thumbColorEnabled.color
                        : thumbColorDisabled.color
                }
                value={enabled}
                onValueChange={onChangeHandler} />
        </View>
    );
};

export default Toggle;
