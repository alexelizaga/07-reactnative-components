import React, {useState} from 'react';
import { View, Text, Switch, Platform } from 'react-native';
import { colors } from '../theme/appTheme';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ( { isOn, onChange }:Props ) => {
  const [isEnable, setIsEnabled] = useState( isOn );
  const toggleSwitch = () => {
    setIsEnabled(!isEnable);
    onChange(!isEnable);
  };

  return (
    <View>
      <Switch
        {
          ...Platform.select({
            android: { 
              thumbColor: (isEnable) ? colors.primary : "white",
              trackColor:{ false: "#a5a5a5", true: colors.primaryLight }
            },
            web: {
              activeThumbColor: colors.primary,
              thumbColor: "white",
              trackColor:{ false: "#a5a5a5", true: colors.primaryLight }
            }
          })
        }
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  )
}