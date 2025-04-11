import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { importDB, ImportDBStatus } from '../utils/dbHandler';
import { showDefaultToast } from '../utils/toastHandler';
import { MainStackParamList, Screens } from '../navigation/MainStack';

export const useImportDBViewModel = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    const goToSettingsHandler = () => {
        navigate(Screens.Settings);
    };

    const importDBHandler = () => {
        void (async () => {
            const importDBStatus: ImportDBStatus = await importDB();
            switch (importDBStatus) {
                case 'imported':
                    showDefaultToast('DB imported successfully');
                    break;
                case 'fileNotSupported':
                    showDefaultToast("File not supported, make sure you're importing a .db file");
                    break;
                default:
                    showDefaultToast('There was an error trying to import the DB');
                    break;
            }
        })();
    };

    return {
        importDBHandler,
        goToSettingsHandler
    };
};
