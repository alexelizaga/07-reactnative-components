import React, {useContext, useState} from 'react';
import { View, Switch, Platform } from 'react-native';

import { ThemeContext } from '../context/theme/ThemeContest';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ( { isOn, onChange }:Props ) => {
  const { theme:{colors,moreColors} } = useContext(ThemeContext);
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
              trackColor:{ false: "#a5a5a5", true: moreColors.primaryLight }
            },
            web: {
              activeThumbColor: colors.primary,
              thumbColor: "white",
              trackColor:{ false: "#a5a5a5", true: moreColors.primaryLight }
            }
          })
        }
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  )
}