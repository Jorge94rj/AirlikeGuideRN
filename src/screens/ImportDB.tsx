import { Button, StyleSheet, Text, View } from 'react-native';

export default function ImportDB() {
    const {
        screenContainer,
        importButton,
        descriptionLabel,
    } = styles;

    return (
        <View style={screenContainer}>
            <Button title="Import DB" color={importButton.backgroundColor}/>
            <Text style={descriptionLabel}>Select a .db file with airlike data</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    importButton: {
        backgroundColor: '#659c2f'
    },
    descriptionLabel: {
        color: '#fff',
        marginTop: 12
    }
});
