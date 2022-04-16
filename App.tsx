import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

import { Navigation } from './src/router/Navigation';
import { useState } from 'react';
import { TutorialCarousel } from './src/components/TutorialCarousel';
import { ThemeProvider } from './src/context/theme/ThemeContest';

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors
    // primary: 'string',
    // background: 'string',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  }
}

const App = () => {
  const [isTutorialEnabled, setIsTutorialEnabled] = useState(true);

  const OnChange = () => {
    setIsTutorialEnabled(false);
  }

  if(isTutorialEnabled){
    return (
      <AppState>
        <TutorialCarousel action={OnChange} />
      </AppState>
    )
  }

  return (
    <AppState>
        <Navigation />
        <StatusBar style="auto" />
    </AppState>
  );
}

const AppState = ( {children}: any ) => {

  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;