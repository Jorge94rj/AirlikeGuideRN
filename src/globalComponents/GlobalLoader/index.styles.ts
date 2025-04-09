import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { colors } = theme;

export const styles = StyleSheet.create({
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 9999
    },
    loaderContainer: {
        backgroundColor: 'transparent'
    },
    activityIndicator: {
        color: colors.primary
    }
});
