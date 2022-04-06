import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { globalStyles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

  const itemSeparator = () => {
    return(
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 8
        }}
      />
    )
  }

  return (
    <View style={[ styles.container, globalStyles.margin ]}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={() => <HeaderTitle title='Menú' />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});