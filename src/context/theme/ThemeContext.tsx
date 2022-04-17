import React, { createContext, useEffect, useReducer } from 'react';
// import { AppState } from 'react-native';
import { Appearance, useColorScheme } from 'react-native-appearance';

import { themeReducer, ThemeState, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

  const scheme = useColorScheme();

  const [ theme, dispatch ] = useReducer(
    themeReducer,
    ( Appearance.getColorScheme() === 'dark') ? darkTheme : lightTheme
  );

  // useEffect(() => {
  //   AppState.addEventListener('change', ( status ) => {
  //     if( status === 'active' ){
  //       ( Appearance.getColorScheme() === 'light' )
  //         ? setLightTheme()
  //         : setDarkTheme();
  //     }
  //   });
  // }, []);
  

  useEffect(() => {
    (scheme=== 'dark')
      ? setDarkTheme()
      : setLightTheme();
  }, [scheme]);
  

  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
  };

  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
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