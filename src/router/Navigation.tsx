import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { colors } from '../theme/appTheme';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreeen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { Prueba } from '../screens/Prueba';
import { ModalScreen } from '../screens/ModalScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTintColor: colors.primary,
      cardStyle: { backgroundColor: 'white' }
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
    </Stack.Navigator>
  );
}