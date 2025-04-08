import { StyleSheet } from 'react-native';
import { theme } from './theme';

const { colors, fontSize } = theme;

export const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        overflow: 'scroll',
        padding: 24,
    },
    screenTitle: {
        color: colors.light,
        fontSize: fontSize.large,
        fontWeight: 'bold'
    },
});
