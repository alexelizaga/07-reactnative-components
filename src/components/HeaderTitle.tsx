import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
  color?: string;
}
export const HeaderTitle = ( {title, color = 'black'}:Props ) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={[ globalStyles.title, {color} ]}>{title}</Text>
    </View>
  )
}