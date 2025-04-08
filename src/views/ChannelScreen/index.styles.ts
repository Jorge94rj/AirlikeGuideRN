import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const { fontSize } = theme;

export const styles = StyleSheet.create({
    channelsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24
    },
    warningContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    warningText: {
        color: '#fcba03',
        fontSize: fontSize.xsmall,
        textAlign: 'center'
    }
});
