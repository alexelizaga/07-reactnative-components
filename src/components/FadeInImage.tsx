import React, { useState } from 'react';
import { ActivityIndicator, Animated, View } from 'react-native';

import { useAnimation } from '../hooks/useAnimation';
import { colors } from '../theme/appTheme';

interface Props {
  uri: string;
}

export const FadeInImage = ( {uri}:Props ) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const loadingFinished = () => {
    fadeIn();
    setIsLoading(false);
  }

  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
      {
        isLoading &&
          <ActivityIndicator
            style={{position:'absolute'}}
            color={colors.primary}
            size={30}
          />
      }
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => loadingFinished()}
        style={{
          width: '100%',
          height: 400,
          opacity
        }}
      />
    </View>
  )
}