import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
    },
    itemButton: {
        borderRadius: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemTitle: {
        maxWidth: 96,
        marginTop: 12,
        color: colors.light,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});
