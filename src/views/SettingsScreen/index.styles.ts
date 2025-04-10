import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { gutter, colors } = theme;

export const styles = StyleSheet.create({
    saveButtonContainer: {
        marginTop: gutter * 4,
        maxWidth: 128
    },
    saveButton: {
        backgroundColor: colors.primary
    }
});
