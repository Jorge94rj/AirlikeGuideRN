import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors, gutter } = theme;

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
    },
    settingsButtonContainer: {
        position: 'absolute',
        right: gutter * 4,
        top: gutter * 4
    }
});
