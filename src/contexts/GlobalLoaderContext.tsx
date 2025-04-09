import React, { createContext, ReactNode, useContext, useState } from 'react';

type GlobalLoaderProviderProps = {
    children: ReactNode;
};

type GlobalLoaderObj = {
    isLoading: boolean;
    showGlobalLoader: () => void;
    hideGlobalLoader: () => void;
};

const GlobalLoaderContext = createContext<GlobalLoaderObj>({
    isLoading: false,
    showGlobalLoader: () => {},
    hideGlobalLoader: () => {}
});

export const useGlobalLoader = () => useContext(GlobalLoaderContext);

export const GlobalLoaderProvider = ({ children }: GlobalLoaderProviderProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const showGlobalLoader = () => setIsLoading(true);
    const hideGlobalLoader = () => setIsLoading(false);

    return (
        <GlobalLoaderContext.Provider value={{ isLoading, showGlobalLoader, hideGlobalLoader }}>
            {children}
        </GlobalLoaderContext.Provider>
    );
};

