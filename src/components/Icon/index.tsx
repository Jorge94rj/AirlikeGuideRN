import { Image, ImageStyle, StyleProp } from 'react-native';
import defaultIcon from './icons/default.png';
import tvGuideIcon from './icons/tv-guide.png';
import videoIcon from './icons/video.png';
import arrowBack from './icons/arrow-back.png';

const icons: Record<string, number> = {
    'default': defaultIcon as number,
    'tv-guide': tvGuideIcon as number,
    'video': videoIcon as number,
    'arrow-back': arrowBack as number
};

type IconProps = {
    name: string;
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
    color?: string;
};

const Icon = ({ name, width, height, style, color }: IconProps) => {
    const icon = icons[name] ?? icons['default'];

    return (
        <Image source={icon} style={[style,{ width, height, tintColor: color }]} />
    );
};

export default Icon;
