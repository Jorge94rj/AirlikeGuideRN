import React from 'react';
import { SafeAreaView } from 'react-native';

import { theme } from './styles/theme';
import MainStack from './navigation/MainStack';

// TO DO: use when adding theme switch feature
/** 
 import { ThemeProvider } from './contexts/ThemeContext';
 Wrap <SafeAreaView> inside <ThemeProvider>
 * */ 

function App(): React.JSX.Element {
    const { colors } = theme;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
            <MainStack />
        </SafeAreaView>
    );
}

export default App;
