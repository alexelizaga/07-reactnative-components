import { createContext } from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const theme = {};

  const setDarkTheme = () => {
    console.log('Set dark theme');
  };

  const setLightTheme = () => {
    console.log('Set light theme');
  };

  return(
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme
    }}>
      { children }
    </ThemeContext.Provider>
  )
}