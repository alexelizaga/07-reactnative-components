import React from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation102Screen = () => {
  const { pan, panResponder } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
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
    backgroundColor: "#61dafb",
    width: 150,
    height: 150,
    borderRadius: 4,
  }
});