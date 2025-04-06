import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors, fontSize } = theme;

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        overflow: 'scroll',
        padding: fontSize.medium
    },
    title: {
        color: colors.light,
        fontSize: fontSize.large
    },
    channelsContainer: {},
    channelItem: {},
    warningContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    warningText: {
        color: '#fcba03',
        fontSize: fontSize.xsmall,
        textAlign: 'center'
    }
});
