import { Button, Text, View } from 'react-native';
import { styles } from './index.styles';
import { useImportDBViewModel } from '../../viewModels/useImportDBViewModel';
import { globalStyles } from '../../styles/global';

const ImportDBScreen = () => {
    const { 
        importDBHandler,
    } = useImportDBViewModel();

    const { screenContainer } = globalStyles;

    const {
        contentContainer,
        importButton,
        descriptionLabel,
    } = styles;

    return (
        <View style={screenContainer}>
            <View style={contentContainer}>
                <Button title="Import DB" color={importButton.backgroundColor} onPress={importDBHandler}/>
                <Text style={descriptionLabel}>Select a .db file with airlike data</Text>
            </View>
        </View>
    );
};

export default ImportDBScreen;
