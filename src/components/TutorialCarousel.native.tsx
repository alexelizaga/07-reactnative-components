import React, { useState, useRef } from 'react';
import { View, Text, ImageSourcePropType, Image, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors } from '../theme/appTheme';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';

const { width: screenWidth } = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType
}

const items: Slide[] = [
  {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png')
  },
  {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png')
  },
  {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png')
  },
]

interface Props extends StackScreenProps<any,any>{};

export const TutorialCarousel = ({ navigation }:Props) => {
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
        backgroundColor:'white',
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
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={styles.subTitle}>{ item.desc }</Text>
      </View>
    )
  }

  return (
    <>
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
        marginHorizontal: 20
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
                    navigation.navigate('HomeScreen');
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
    </>
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