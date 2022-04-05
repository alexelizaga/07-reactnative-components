import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { globalStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterface';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  },
];

export const HomeScreen = () => {

  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={globalStyles.title}>Opciones de menú</Text>
      </View>
    )
  }

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
        ListHeaderComponent={renderListHeader}
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