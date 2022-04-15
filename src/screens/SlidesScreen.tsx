import React from 'react';
import { SafeAreaView } from 'react-native';

import { TutorialCarousel } from '../components/TutorialCarousel';

export const SlidesScreen = () => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <TutorialCarousel />
    </SafeAreaView>
  )
}
