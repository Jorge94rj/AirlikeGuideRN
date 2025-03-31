import React from 'react';
import { SafeAreaView } from 'react-native';

import MainStack from './navigation/MainStack';
import { ThemeProvider } from './contexts/ThemeContext';

function App(): React.JSX.Element {
    console.log('ENTERS...')
    return (
        <ThemeProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <MainStack />
            </SafeAreaView>
        </ThemeProvider>
    );
}

export default App;
