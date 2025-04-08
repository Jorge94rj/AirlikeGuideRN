import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    importButton: {
        backgroundColor: colors.primary
    },
    descriptionLabel: {
        color: colors.light,
        marginTop: 12
    }
});
