import React, { useContext } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  const { theme:{colors} } = useContext(ThemeContext);
  const { pan, panResponder } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box, {backgroundColor: colors.primary}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 4,
  }
});