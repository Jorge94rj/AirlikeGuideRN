import React from 'react';
import { SafeAreaView } from 'react-native';

import { theme } from './styles/theme';
import MainStack from './navigation/MainStack';
import { GlobalLoaderProvider } from './contexts/GlobalLoaderContext';
import GlobalLoader from './globalComponents/GlobalLoader';

// TO DO: use when adding theme switch feature
/** 
 import { ThemeProvider } from './contexts/ThemeContext';
 Wrap <SafeAreaView> inside <ThemeProvider>
 * */ 

function App(): React.JSX.Element {
    const { colors } = theme;

    return (
        <GlobalLoaderProvider>
            <GlobalLoader />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.secondary }}>
                <MainStack />
            </SafeAreaView>
        </GlobalLoaderProvider>
    );
}

export default App;
