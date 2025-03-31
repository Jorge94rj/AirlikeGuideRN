import { useTheme } from '../contexts/ThemeContext';

export const useGetGlobalScreenOptions = () => {
    const { colors } = useTheme();

    return {
        headerShown: false,
        navigationBarColor: colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: colors.light,
        tabBarInactiveTintColor: colors.dark,
    };
};
