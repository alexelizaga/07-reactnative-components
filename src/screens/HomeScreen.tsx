import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { globalStyles } from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {

  return (
    <View style={[ styles.container, globalStyles.margin ]}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={ (item) => item.name }
        ListHeaderComponent={() => <HeaderTitle title='Menú' />}
        ItemSeparatorComponent={ItemSeparator}
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