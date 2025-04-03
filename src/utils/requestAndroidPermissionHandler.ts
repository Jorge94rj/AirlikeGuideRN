import { NativeModules, Permission, PermissionsAndroid } from 'react-native';

const { ManageStoragePermission } = NativeModules;

type AndroidPermissions = Record<string, Permission>;

export const androidPermissions: AndroidPermissions = {
    readExternalStorage: PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    writeExternalStorage: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
};

export type RequestPermissionOptions = {
    permission: Permission;
    title: string;
    message: string;
};

export const requestAndroidPermision = async (options: RequestPermissionOptions) => {
    const { permission, title, message } = options;

    const hasPermission = await hasAndroidPermission(permission);

    if (!hasPermission) {
        try {
            return PermissionsAndroid.request(permission, {
                title,
                message,
                buttonNeutral: 'Ask me later',
                buttonNegative: 'Cancel',
                buttonPositive: 'Ok',
            });
        } catch (err) {
            console.warn(err);
        }
    }
};

export const hasAndroidPermission = async (permission: Permission) => {
    return await PermissionsAndroid.check(permission);
};

export const requestStoreManagementPermission = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    ManageStoragePermission.requestManageExternalStoragePermission(
        (message: unknown) => console.log('SUCCESS', message),
        (error: unknown) => console.log('ERROR', error),
    );
};
