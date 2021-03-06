import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from '../context/theme/ThemeContext';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreeen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';

const Stack = createStackNavigator();

export const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={ theme }
    >
      <Stack.Navigator screenOptions={{
        headerShown: true,
      }}>
        <Stack.Screen name="HomeScreen" options={{ title: 'Home'}} component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" options={{ title: 'Animation 101'}} component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" options={{ title: 'Animation 102'}} component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" options={{ title: 'Switch'}} component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" options={{ title: 'Alert'}} component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" options={{ title: 'Text Input'}} component={TextInputScreen} />
        <Stack.Screen name="PullToRefreshScreen" options={{ title: 'Pull to refresh'}} component={PullToRefreshScreeen} />
        <Stack.Screen name='SectionListScreen' options={{title: 'Section list'}} component={SectionListScreen} />
        <Stack.Screen name='ModalScreen' options={{title: 'Modal'}} component={ModalScreen} />
        <Stack.Screen name='InfiniteScrollScreen' options={{title: 'Infinite Scroll'}} component={InfiniteScrollScreen} />
        <Stack.Screen name='ChangeThemeScreen' options={{title: 'Theme'}} component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}