import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    importButton: {
        backgroundColor: colors.primary
    },
    descriptionLabel: {
        color: colors.light,
        marginTop: 12
    }
});
