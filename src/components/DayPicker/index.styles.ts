import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors, fontSize, gutter } = theme;

export const styles = StyleSheet.create({
    titleText: {
        color: colors.light,
        fontSize: fontSize.medium,
        marginBottom: gutter * 2
    },
    daysContainer: {
        maxWidth: 'auto',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: gutter * 2
    },
    dayItemContainer: {
        width: gutter * 8,
        height: gutter * 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.light,
        borderRadius: gutter,
    },
    dayItemContainerActive: {
        backgroundColor: colors.light
    },
    dayItemText: {
        color: colors.light,
        fontWeight: 'bold',
        fontSize: fontSize.small
    },
    dayItemTextActive: {
        color: colors.secondary
    }
});
