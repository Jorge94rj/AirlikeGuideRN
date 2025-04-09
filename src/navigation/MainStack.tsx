import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useGetGlobalScreenOptions } from '../hooks/useGetGlobalScreenOptions';
import HomeTabs from './HomeTabs';
import ScheduleScreen from '../views/ScheduleScreen';

export type MainStackParamList = {
    Home: undefined;
    Schedule: { id: number, name: string | undefined };
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
                    name="Schedule"
                    component={ScheduleScreen}
                    options={globalScreenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
