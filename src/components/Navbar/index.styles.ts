import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { gutter, fontSize, colors } = theme;

export const styles = StyleSheet.create({
    navbarContainer: {
        flexDirection: 'row',
        padding: gutter * 3,
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
