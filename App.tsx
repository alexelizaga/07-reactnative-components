import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Navigation } from './src/router/Navigation';
import { ThemeProvider, ThemeContext } from './src/context/theme/ThemeContest';
import { TutorialCarousel } from './src/components/TutorialCarousel';

const App = () => {
  const [isTutorialEnabled, setIsTutorialEnabled] = useState(true);

  const OnChange = () => {
    setIsTutorialEnabled(false);
  }

  if(isTutorialEnabled){
    return (
      <AppState>
        <TutorialCarousel action={OnChange} />
        <StatusBar style='auto' />
      </AppState>
    )
  }

  return (
    <AppState>
        <Navigation />
        <StatusBar style='auto' />
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