import React, {useContext} from 'react';
import { View, StyleSheet,  Animated, Button } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation101Screen = () => {

  const { theme:{colors} } = useContext(ThemeContext);
  const { position, opacity, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={styles.conatiner}>
      <Animated.View style={[styles.box, {
        backgroundColor: colors.primary,
        opacity: opacity,
        transform: [{
          translateY: position
        }]
      }]} />
      <Button
        title='Fade In'
        onPress={() => {
          fadeIn();
          startMovingPosition(-200);
        }}
        color={colors.primary}
      />
      <View style={{height: 10}} />
      <Button
        title='Fade Out'
        onPress={() => {
          fadeOut();
          startMovingPosition(0);
        }}
        color={colors.primary}
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
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
    position: 'relative'
  }
});