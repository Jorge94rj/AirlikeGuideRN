// TO DO: use when adding theme switch feature
import { createContext, FC, JSX, ReactNode, useContext } from 'react';
import { theme } from '../styles/theme';

type ThemeProviderProps = {
    children?: ReactNode;
};

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>    
);
