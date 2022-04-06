import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      cardStyle: { backgroundColor: 'white' }
    }}>
      <Stack.Screen name="HomeScreen" options={{ title: 'Home'}} component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" options={{ title: 'Animation 101'}} component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" options={{ title: 'Animation 102'}} component={Animation102Screen} />
    </Stack.Navigator>
  );
}