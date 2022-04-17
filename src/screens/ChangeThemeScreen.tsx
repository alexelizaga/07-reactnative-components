import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContest';

export const ChangeThemeScreen = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <View style={ [globalStyles.container, globalStyles.margin] }>
      <HeaderTitle title='Themes'/>

      <View
        style={{flex:1, justifyContent:'center', alignItems:'center'}}
      >
        <TouchableOpacity
          onPress={ theme.dark ? setLightTheme : setDarkTheme }
          activeOpacity={0.8}
          style={{
            width: 150,
            height: 50,
            borderRadius: 20,
            backgroundColor: '#5956cb',
            justifyContent: 'center',
            alignItems: 'center'
            }
          }>
            <Text
              style={{
                color: 'white',
                fontSize: 16
              }}
            >
              {theme.dark ? 'Light':'Dark'}
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
