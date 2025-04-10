import { useState } from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import Icon from '../Icon';

type ImageWrapperProps = {
    uri?: string;
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
    // Fallback icon when image can't load
    defaultFallbackIcon?: string;
    fallbackIconSize?: number;
    fallbackIconColor?: string;
};

const ImageWrapper = ({ 
    uri,
    width,
    height,
    style,
    defaultFallbackIcon,
    fallbackIconSize = 48,
    fallbackIconColor
}: ImageWrapperProps) => {
    const [loadError, setLoadError] = useState(false);

    const showFallback = !uri || loadError;
    const handleLoad = () =>  setLoadError(false);
    const handleLoadError = () => setLoadError(true);

    if (showFallback) {
        return (
            <Icon
                name={defaultFallbackIcon ?? 'default'}
                style={style}
                width={fallbackIconSize}
                height={fallbackIconSize}
                color={fallbackIconColor}
            />);
    } else {
        return (
            <Image
                resizeMode="cover"
                source={{ uri }}
                style={style}
                width={width}
                height={height}
                onLoad={handleLoad}
                onError={handleLoadError}
            />
        );
    }
            
};

export default ImageWrapper;
