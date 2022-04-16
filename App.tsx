import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

import { Navigation } from './src/router/Navigation';
import { useState } from 'react';
import { TutorialCarousel } from './src/components/TutorialCarousel';

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
    return (<TutorialCarousel action={OnChange} />)
  }

  return (
    <NavigationContainer
      theme={ customTheme }
    >
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;