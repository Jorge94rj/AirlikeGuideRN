import { ActivityIndicator, View } from 'react-native';
import { useGlobalLoader } from '../../contexts/GlobalLoaderContext';
import { styles } from './index.styles';

const GlobalLoader = () => {
    const { isLoading } = useGlobalLoader();

    if (!isLoading) return null;

    const { overlayContainer, loaderContainer, activityIndicator } = styles;

    return (
        <View style={overlayContainer}>
            <View style={loaderContainer}>
                <ActivityIndicator size="large" color={ activityIndicator.color }/>
            </View>
        </View>
    );
};

export default GlobalLoader;
