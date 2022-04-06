import React, {useState} from 'react';
import { View, Switch, StyleSheet, Platform } from 'react-native';
import { colors } from '../theme/appTheme';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        {
          ...Platform.select({
            android: { 
              thumbColor: (isEnabled) ? colors.primary : "white",
              trackColor:{ false: "#a5a5a5", true: colors.primaryLight }
            },
            web: {
              activeThumbColor: colors.primary,
              thumbColor: "white",
            }
          })
        }
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});