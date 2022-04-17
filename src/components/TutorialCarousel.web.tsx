import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { items, Slide } from '../data/carouselItems';

interface Props {
  action: () => {}
};

export const TutorialCarousel = ({ action }:Props) => {

  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex:1,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
        <Image
          source={ item.img }
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={[styles.subTitle, {width: 350}]}>{ item.desc }</Text>
      </View>
    )
  }

  return (
    <View
      style={{
        flex:1,
        justifyContent: 'center',
        paddingVertical: 20,
      }}
    >
      <FlatList
        data={items}
        renderItem={ ({item}) => renderItem(item) }
        keyExtractor={ (item, index) => item.title + index }
        horizontal={ true }
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        onPress={action}
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          backgroundColor: colors.primary,
          width: 140,
          height: 50,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 20
        }}
      >
        <Text style={{
          fontSize: 20,
          color: 'white'
        }}>
          Entrar
        </Text>
        <Ionicons
          name='chevron-forward-outline'
          size={30}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16
  }
});