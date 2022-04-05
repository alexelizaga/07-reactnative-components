import React, { useRef } from 'react';
import { View, StyleSheet,  Animated, Button, Easing } from 'react-native';

export const Animation101Screen = () => {

  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity,
      {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      top,
      {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
        easing: Easing.bounce
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
    Animated.timing(
      top,
      {
        toValue: -100,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.bounce
      }
    ).start();
  }

  return (
    <View style={styles.conatiner}>
      <Animated.View style={[styles.purpleBox, {
        opacity: opacity, transform: [{
          translateY: top
        }]
      }]} />
      <Button
        title='Fade In'
        onPress={fadeIn}
      />
      <Button
        title='Fade Out'
        onPress={fadeOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
    position: 'relative'
  }
});