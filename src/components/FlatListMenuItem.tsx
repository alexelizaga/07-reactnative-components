import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { MenuItem } from '../interfaces/appInterface';
import { ThemeContext } from '../context/theme/ThemeContest';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  const { theme: {colors} } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component)}
    >
      <View style={styles.menuItemContainer}>
        <Ionicons name={menuItem.icon} size={23} color={colors.primary} />
        <Text style={[ styles.itemText, {color: colors.text} ]}>
          {menuItem.name}
        </Text>
        <View style={{flex: 1}}></View>
        <Ionicons name="chevron-forward-outline" size={23} color={colors.primary} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19
  }
});