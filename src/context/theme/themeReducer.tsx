import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

type ThemeAction =
  | { type: 'set_light_theme'}
  | { type: 'set_dark_theme'}

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor?: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.4)',
  colors: {
    ...DefaultTheme.colors,
    primary: '#5956cb',
    background: 'white',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  }
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255,0.4)',
  colors: {
    ...DarkTheme.colors,
    primary: '#5956cb',
    background: 'rgb(18,18,18)',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  }
}

export const themeReducer = ( state: ThemeState, action: ThemeAction): ThemeState  => {

  switch ( action.type ) {
    case 'set_dark_theme':
      return {
        ...darkTheme
      }
    case 'set_light_theme':
      return {
        ...lightTheme
      }
    default:
      return state
  }

}