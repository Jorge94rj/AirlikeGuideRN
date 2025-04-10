import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useGetGlobalScreenOptions } from '../hooks/useGetGlobalScreenOptions';
import HomeTabs from './HomeTabs';
import ScheduleScreen from '../views/ScheduleScreen';
import AiringScreen from '../views/AiringScreen';
import SettingsScreen from '../views/SettingsScreen';

type ChannelParams = {
    id: number,
    name?: string,
    dayId?: number
}

export type MainStackParamList = {
    Home: undefined;
    Schedule: ChannelParams;
    Airing: ChannelParams;
    Settings: undefined;
}

const Stack = createNativeStackNavigator();

const MainStack = () => {
    const globalScreenOptions = useGetGlobalScreenOptions();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTabs}
                    options={globalScreenOptions}
                />
                <Stack.Screen 
                    name="Airing"
                    component={AiringScreen}
                    options={globalScreenOptions}
                />
                <Stack.Screen 
                    name="Schedule"
                    component={ScheduleScreen}
                    options={globalScreenOptions}
                />
                <Stack.Screen 
                    name="Settings"
                    component={SettingsScreen}
                    options={globalScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
