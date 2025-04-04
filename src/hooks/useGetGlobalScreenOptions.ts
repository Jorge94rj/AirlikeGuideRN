import { theme } from '../styles/theme';

type GlobalScreenOptions = {
    headerShown: boolean,
    navigationBarColor: string,
    tabBarShowLabel: boolean,
    tabBarStyle: { backgroundColor: string },
    tabBarActiveTintColor: string,
    tabBarInactiveTintColor: string,
}

export const useGetGlobalScreenOptions = (): GlobalScreenOptions => {
    const { colors } = theme;

    return {
        headerShown: false,
        navigationBarColor: colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.primary },
        tabBarActiveTintColor: colors.light,
        tabBarInactiveTintColor: colors.dark,
    };
};
