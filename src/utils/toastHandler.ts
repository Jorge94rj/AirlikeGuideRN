import { ToastAndroid } from 'react-native';

export const showDefaultToast = (message: string) => {
    ToastAndroid.showWithGravityAndOffset(message, ToastAndroid.LONG, ToastAndroid.BOTTOM, 0, 0);
};
