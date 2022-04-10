import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl, useWindowDimensions, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles, colors } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreeen = () => {
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
    }, 15000);
  }

  return (
    <ScrollView style={{ marginTop: (refreshing && Platform.OS === 'ios') ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={0.4*height}
          // progressBackgroundColor={colors.primary}
          colors={[ colors.primaryLight, colors.primary ]}
          // style={{ backgroundColor:colors.primary }}
          // tintColor={'white'}
          title={'Refreshing'}
        />
      }
    >
      <View style={globalStyles.margin}>
        <HeaderTitle title='Pull to refresh' />
        <Text>PullToRefreshScreeen</Text>
        {
          data && <Text>{data}</Text>
        }
      </View>
    </ScrollView>
  )
}