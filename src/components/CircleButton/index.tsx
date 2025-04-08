import { Pressable, Text, View } from 'react-native';
import { styles } from './index.styles';
import ImageWrapper from '../ImageWrapper';

export type CircleButtonProps = {
    id: number;
    title: string;
    size: number,
    onPress: (_id: number) => void;
    showImage?: boolean;
    image?: string;
    defaultIcon?: string;
};

const CircleButton = ({ 
    id,
    title,
    size,
    onPress,
    showImage,
    image,
    defaultIcon
}: CircleButtonProps) => {
    const { itemContainer, itemButton, itemTitle } = styles;

    return (
        <View style={itemContainer}>
            <Pressable onPress={() => onPress(id)} style={{ ...itemButton, width: size, height: size }}>
                {showImage && (
                    <ImageWrapper 
                        uri={image}
                        style={itemButton}
                        width={size}
                        height={size}
                        defaultFallbackIcon={defaultIcon}
                    />
                )}
            </Pressable>
            <Text style={itemTitle}>{title}</Text>
        </View>
    );
};

export default CircleButton;
