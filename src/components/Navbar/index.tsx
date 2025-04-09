import { Pressable, Text, View } from 'react-native';
import Icon from '../Icon';
import { styles } from './index.styles';

type NavbarProps = {
    title: string;
    onPress: () => void;
    subTitle?: string;
};

const Navbar = ({ title, subTitle, onPress }: NavbarProps) => {

    const { 
        navbarContainer,
        infoContainer,
        titleStyle,
        subTitleStyle
    } = styles;
    
    return (
        <View style={navbarContainer}>
            <Pressable onPress={onPress}>
                <Icon name='arrow-back' width={48} height={48} />
            </Pressable>
            <View style={infoContainer}>
                <Text style={titleStyle}>{title}</Text>
                <Text style={subTitleStyle}>{subTitle}</Text>
            </View>
        </View>
    );
};

export default Navbar;
