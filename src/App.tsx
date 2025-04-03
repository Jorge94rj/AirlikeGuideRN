import React from 'react';
import { SafeAreaView } from 'react-native';

import MainStack from './navigation/MainStack';

// TO DO: use when adding theme switch feature
/** 
 import { ThemeProvider } from './contexts/ThemeContext';
 Wrap <SafeAreaView> inside <ThemeProvider>
 * */ 

function App(): React.JSX.Element {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MainStack />
        </SafeAreaView>
    );
}

export default App;
