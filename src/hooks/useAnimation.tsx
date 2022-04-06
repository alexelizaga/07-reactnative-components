import { useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;
  const pan = useRef( new Animated.ValueXY({x:0,y:0}) ).current;

  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start();
  }

  const fadeOut = () => {
    Animated.timing(
      opacity,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }
    ).start();
  }

  const startMovingPosition = ( initPosition: number = -100, duration: number = 300 ) => {
    position.setValue(initPosition);
    Animated.timing(
      position,
      {
        toValue: 0,
        duration,
        useNativeDriver: true,
        easing: Easing.ease
      }
    ).start();
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        { dx: pan.x, dy: pan.y },
      ], {
        useNativeDriver: false
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan,
        { 
          toValue: {x:0, y:0},
          useNativeDriver: false
        },
      ).start();
    }
  });
  
  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovingPosition,
    pan,
    panResponder
  }
}