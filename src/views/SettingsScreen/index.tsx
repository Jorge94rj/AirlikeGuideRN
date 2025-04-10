import { Button, View } from 'react-native';
import { globalStyles } from '../../styles/global';
import Navbar from '../../components/Navbar';
import Toggle from '../../components/Toggle';
import { useSettingsViewModel } from '../../viewModels/useSettingsViewModel';
import { Settings } from '../../utils/configFileHandler';
import { styles } from './index.styles';

const SettingsScreen = () => {
    const { settings, goBack, toggleHandler, saveChangesHandler } = useSettingsViewModel();

    const { screenContainer } = globalStyles;

    const { saveButtonContainer, saveButton } = styles;

    return (
        <>
            <Navbar title="Settings" onPress={goBack} />
            <View style={screenContainer}>
                <Toggle 
                    id={Settings.HideChannelLogos}
                    title="Hide channel logos"
                    defaultValue={settings && settings[Settings.HideChannelLogos]}
                    onChange={toggleHandler} 
                />
                <Toggle 
                    id={Settings.HideChannelNames}
                    title="Hide channel names"
                    defaultValue={settings && settings[Settings.HideChannelNames]}
                    onChange={toggleHandler} 
                />
                <Toggle
                    id={Settings.HideMedia}
                    title="Skip media loading" 
                    defaultValue={settings && settings[Settings.HideMedia]}
                    onChange={toggleHandler} 
                />
                <View style={saveButtonContainer}>
                    <Button 
                        title="Save changes"
                        color={saveButton.backgroundColor}
                        onPress={saveChangesHandler}
                    />
                </View>
            </View>
        </>
    );
};

export default SettingsScreen;
