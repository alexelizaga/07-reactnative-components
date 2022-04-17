import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '../theme/appTheme';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  title: string;
}
export const HeaderTitle = ( {title}:Props ) => {
  const { top } = useSafeAreaInsets();
  const { theme:{colors} } = useContext(ThemeContext);
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={[ globalStyles.title, {color: colors.text} ]}>{title}</Text>
    </View>
  )
}