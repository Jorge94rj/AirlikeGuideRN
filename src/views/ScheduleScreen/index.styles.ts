import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { gutter, fontSize, colors } = theme;

export const styles = StyleSheet.create({
    descriptionContainer: {
        padding: gutter * 3
    },
    channelTitle: {
        fontSize: fontSize.small,
        color: colors.light,
        textTransform: 'capitalize'
    }
});
