import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { styles } from './index.styles';
import ImageWrapper from '../ImageWrapper';

export type ItemProps = {
    title: string;
    active?: boolean;
    description?: string;
    image?: string;
    defaultIcon?: string;
};

type ItemListProps = {
    list: ItemProps[] | undefined;
};

const renderItem: ListRenderItem<ItemProps> = ({ item }) => {
    const { title, active, description, image, defaultIcon } = item;

    const { 
        itemContainer,
        itemContainerActive,
        imageContainer,
        imageContainerActive,
        defaultIconStyle,
        defaultIconActiveStyle,
        titleText,
        titleTextActive,
        descriptionText,
        descriptionTextActive
    } = styles;

    return (
        <View style={[itemContainer, active && itemContainerActive]}>
            <ImageWrapper 
                uri={image}
                width={48}
                height={48}
                style={[imageContainer, active && imageContainerActive]}
                defaultFallbackIcon={defaultIcon}
                fallbackIconColor={active ? defaultIconActiveStyle.color : defaultIconStyle.color}
            />
            <Text 
                style={[titleText, active && titleTextActive]} 
                numberOfLines={1} 
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <Text style={[descriptionText, active && descriptionTextActive]}>{description}</Text>
        </View>
    );
};

const ItemList = ({ list }: ItemListProps) => {
    return (
        <FlatList
            data={list}
            renderItem={renderItem}
        />
    );
};

export default ItemList;
