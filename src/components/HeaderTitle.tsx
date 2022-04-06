import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '../theme/appTheme';

interface Props {
  title: string;
}
export const HeaderTitle = ( {title}:Props ) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top, marginBottom: 20 }}>
      <Text style={globalStyles.title}>{title}</Text>
    </View>
  )
}