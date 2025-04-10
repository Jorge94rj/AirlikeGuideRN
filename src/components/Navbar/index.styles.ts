import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { gutter, fontSize, colors } = theme;

export const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        paddingHorizontal: gutter * 3,
        paddingVertical: gutter * 2,
        backgroundColor: colors.secondary
    },
    infoContainer: {
        flexDirection: 'column',
        marginLeft: gutter * 2
    },
    titleStyle: {
        fontSize: fontSize.medium,
        fontWeight: 'bold',
        color: colors.light
    },
    subTitleStyle: {
        fontSize: fontSize.small,
        textTransform: 'capitalize',
        color: colors.light
    }
});
