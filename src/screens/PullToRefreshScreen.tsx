import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, RefreshControl, useWindowDimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContest';

export const PullToRefreshScreeen = () => {
  const { theme:{colors} } = useContext(ThemeContext);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>()
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  }

  return (
    <ScrollView style={{ marginTop: (refreshing && Platform.OS === 'ios') ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={0.4*height}
          progressBackgroundColor={ colors.primary }
          colors={[ colors.background ]}
          title={'Refreshing'}
        />
      }
    >
      <View style={globalStyles.margin}>
        <HeaderTitle title='Pull to refresh' />
        <Text style={{ color: colors.text }}>PullToRefreshScreeen</Text>
        {
          data && <Text style={{ color: colors.text }}>{data}</Text>
        }
      </View>
    </ScrollView>
  )
}