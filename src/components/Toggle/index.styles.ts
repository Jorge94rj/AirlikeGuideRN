import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { gutter, fontSize, colors } = theme;

export const styles = StyleSheet.create({
    toggleContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: gutter
    },
    titleStyle: {
        color: colors.light,
        fontSize: fontSize.small,
    },
    toggleEnabled: {
        color: colors.dark
    },
    toggleDisabled: {
        color: colors.grey
    },
    thumbColorEnabled: {
        color: colors.primary
    },
    thumbColorDisabled: {
        color: colors.light
    },
});
