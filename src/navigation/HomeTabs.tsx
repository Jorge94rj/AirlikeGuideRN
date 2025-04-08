import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useGetGlobalScreenOptions } from '../hooks/useGetGlobalScreenOptions';
import ChannelScreen from '../views/ChannelScreen';
import ImportDBScreen from '../views/ImportDBScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    const globalScreenOptions = useGetGlobalScreenOptions();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Channels"
                component={ChannelScreen}
                options={{
                    ...globalScreenOptions,
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="tv" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Import DB"
                component={ImportDBScreen}
                options={{
                    ...globalScreenOptions,
                    tabBarIcon: ({ color, size }) => <MaterialIcons name="publish" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabs;
