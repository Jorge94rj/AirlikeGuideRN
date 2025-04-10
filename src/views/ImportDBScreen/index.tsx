import { Button, Pressable, Text, View } from 'react-native';
import { styles } from './index.styles';
import { useImportDBViewModel } from '../../viewModels/useImportDBViewModel';
import { globalStyles } from '../../styles/global';
import Icon from '../../components/Icon';

const ImportDBScreen = () => {
    const { 
        importDBHandler,
        goToSettingsHandler
    } = useImportDBViewModel();

    const { screenContainer } = globalStyles;

    const {
        contentContainer,
        importButton,
        descriptionLabel,
        settingsButtonContainer
    } = styles;

    return (
        <View style={screenContainer}>
            <View style={settingsButtonContainer}>
                <Pressable onPress={goToSettingsHandler}>
                    <Icon name="settings" width={48} height={48}/>
                </Pressable>
            </View>
            <View style={contentContainer}>
                <Button title="Import DB" color={importButton.backgroundColor} onPress={importDBHandler}/>
                <Text style={descriptionLabel}>Select a .db file with airlike data</Text>
            </View>
        </View>
    );
};

export default ImportDBScreen;
