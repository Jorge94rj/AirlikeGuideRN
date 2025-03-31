import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useGetGlobalScreenOptions } from '../hooks/useGetGlobalScreenOptions';
import Channel from '../screens/Channel';
import ImportDB from '../screens/ImportDB';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    const globalScreenOptions = useGetGlobalScreenOptions();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Channels"
                component={Channel}
                options={{
                    ...globalScreenOptions,
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="tv" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Import DB"
                component={ImportDB}
                options={{
                    ...globalScreenOptions,
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="publish" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabs;
