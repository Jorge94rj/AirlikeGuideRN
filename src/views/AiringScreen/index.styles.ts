import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors, fontSize, gutter } = theme;

export const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        marginBottom: gutter * 2,
    },
    tvShowName: {
        fontSize: fontSize.medium,
        fontWeight: 'bold',
        color: colors.light,
    },
    rangeHour: {
        marginTop: gutter,
        fontSize: fontSize.xsmall,
        color: colors.light
    },
    descriptionContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer: {
        width: gutter * 16,
        height: gutter * 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: gutter,
        marginVertical: gutter
    },
    overviewScrollContainer: {
        height: gutter * 16,
        marginTop: 8,
    },
    overviewText: {
        color: colors.light,
        fontSize: fontSize.xsmall,
    },
    scheduleContainer: {
        marginTop: gutter * 2,
    },
    seeScheduleText: {
        marginTop: gutter * 3,
        marginBottom: gutter * 4,
        color: colors.primary,
        fontSize: fontSize.small,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textTransform: 'capitalize',
    },
});
