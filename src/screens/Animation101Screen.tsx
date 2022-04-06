import React from 'react';
import { View, StyleSheet,  Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={styles.conatiner}>
      <Animated.View style={[styles.purpleBox, {
        opacity: opacity, transform: [{
          translateY: position
        }]
      }]} />
      <Button
        title='Fade In'
        onPress={() => {
          fadeIn();
          startMovingPosition(-200);
        }}
      />
      <Button
        title='Fade Out'
        onPress={() => {
          fadeOut();
          startMovingPosition(0);
        }}
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