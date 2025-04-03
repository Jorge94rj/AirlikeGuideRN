import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useGetGlobalScreenOptions } from '../hooks/useGetGlobalScreenOptions';
import HomeTabs from './HomeTabs';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
