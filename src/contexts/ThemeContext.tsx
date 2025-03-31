import { createContext, FC, JSX, ReactNode, useContext } from 'react';
import { theme } from '../styles/theme';

type ThemeProviderProps = {
    children?: ReactNode;
};

console.log('THEME=>', theme)

const ThemeContext = createContext(theme);

console.log('CTX=>', ThemeContext)

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }): JSX.Element => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>    
);
