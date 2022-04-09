import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

export const PullToRefreshScreeen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
    }, 1500);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={globalStyles.margin}>
        <HeaderTitle title='Pull to refresh' />
        <Text>PullToRefreshScreeen</Text>
      </View>
    </ScrollView>
  )
}