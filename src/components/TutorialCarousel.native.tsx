import React, { useState, useRef, useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated, TouchableOpacity, SafeAreaView } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../theme/appTheme';
import { useAnimation } from '../hooks/useAnimation';
import { items, Slide } from '../data/carouselItems';
import { ThemeContext } from '../context/theme/ThemeContext';

const { width: screenWidth } = Dimensions.get('window');

interface Props {
  action: () => {}
};

export const TutorialCarousel = ({ action }:Props) => {
  const { theme:{colors} } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const { opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);

  const OnIndexChange = (index: number) => {
    setActiveIndex(index);
    if(index === 2) {
      isVisible.current = true;
      fadeIn();
    };
  }

  const renderItem = (item: Slide) => {
    return (
      <View style={{
        flex:1,
        backgroundColor: colors.background,
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center'
      }}>
        <Image
          source={ item.img }
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center'
          }}
        />
        <Text style={[styles.title, {color: colors.primary}]}>{ item.title }</Text>
        <Text style={[styles.subTitle, {color: colors.text}]}>{ item.desc }</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: colors.background }}>
      <Carousel
        data={items}
        renderItem={ ({item}) => renderItem(item) }
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onSnapToItem={ (index) => {
          OnIndexChange(index);
        }}
      />

      <View style={{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
      }}>
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={items.length}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary
          }}
        />
        {
          isVisible && (
            <Animated.View
              style={{
                opacity
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if(isVisible.current){
                    action();
                  }
                  
                }}
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.primary,
                  width: 140,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                activeOpacity={0.8}
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
            </Animated.View>
          )
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary
  },
  subTitle: {
    fontSize: 16
  }
});