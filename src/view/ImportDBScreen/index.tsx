import { Button, Text, View } from 'react-native';
import { styles } from './index.styles';
import { useImportDBViewModel } from '../../viewModel/useImportDBViewModel';

export default function ImportDBScreen() {
    const { 
        importDBHandler,
    } = useImportDBViewModel();

    const {
        screenContainer,
        importButton,
        descriptionLabel,
    } = styles;

    return (
        <View style={screenContainer}>
            <Button title="Import DB" color={importButton.backgroundColor} onPress={importDBHandler}/>
            <Text style={descriptionLabel}>Select a .db file with airlike data</Text>
        </View>
    );
}
