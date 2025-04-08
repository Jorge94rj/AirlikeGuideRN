import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors, fontSize, gutter } = theme;

export const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        padding: gutter * 2
    },
    itemContainerActive: {
        backgroundColor: colors.light        
    },
    imageContainer: {
        backgroundColor: colors.light,
        width: 54,
        height: 54,
        borderRadius: 50,
    },
    imageContainerActive: {
        backgroundColor: colors.secondary,
    },
    defaultIconStyle: {
        color: colors.secondary
    },
    defaultIconActiveStyle: {
        color: colors.light
    },
    titleText: {
        width: '100%',
        maxWidth: 198,
        padding: gutter,
        color: colors.grey,
        fontSize: fontSize.small,
    },
    titleTextActive: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    descriptionText: {
        width: '100%',
        padding: gutter,
        color: colors.light,
        fontSize: fontSize.xsmall,
        fontWeight: 'bold'
    },
    descriptionTextActive: {
        color: colors.secondary,
    }
});
