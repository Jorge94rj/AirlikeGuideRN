import { useEffect } from 'react';
import { importDB, ImportDBStatus, openDB } from '../utils/dbHandler';
import { showDefaultToast } from '../utils/toastHandler';
import { androidPermissions, requestAndroidPermision } from '../utils/requestAndroidPermissionHandler';
import { Linking, PermissionsAndroid } from 'react-native';

export const useImportDBViewModel = () => {
    useEffect(() => {
        // void (async () => {
        //     console.log('ASK_PERMISSION')
        //     console.log('HAS_PERMISSION', await hasAndroidPermission(androidPermissions.readExternalStorage));
        //     requestStoreManagementPermission();
        // })();
        void (async () => {
            const permissionResult = await requestAndroidPermision({
                permission: androidPermissions.writeExternalStorage,
                title: 'Storage permission',
                message: 'Airlike needs to access to your storage to pick a .db file'
            });

            // console.log('PERMISSION_RESULT', permissionResult)

            if (permissionResult === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                showDefaultToast("Since you've denied the permission before, you must enable it from the app settings");
                await Linking.openSettings();
            }
        })();
    },[]);

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
            // TEST
            await openDB();
        })();
    };

    return {
        importDBHandler,
    };
};
