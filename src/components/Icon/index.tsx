import { Image, ImageStyle, StyleProp } from 'react-native';
import defaultIcon from './icons/default.png';
import tvGuideIcon from './icons/tv-guide.png';
import videoIcon from './icons/video.png';

const icons: Record<string, number> = {
    'default': defaultIcon as number,
    'tv-guide': tvGuideIcon as number,
    'video': videoIcon as number
};

type IconProps = {
    name: string;
    width: number;
    height: number;
    style?: StyleProp<ImageStyle>;
};

const Icon = ({ name, width, height, style }: IconProps) => {
    const icon = icons[name];

    if (!icon) return null;

    return (
        <Image source={icon} style={[style,{ width, height }]} />
    );
};

export default Icon;
