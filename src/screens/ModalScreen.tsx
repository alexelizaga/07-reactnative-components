import React, { useContext, useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContest';

export const ModalScreen = () => {
  const { theme:{colors} } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={[globalStyles.margin, globalStyles.container]}>
      <HeaderTitle title='Modal screen' />

      
      <View style={{ flex:1, justifyContent: 'center' }}>     
        <Button
          title='Open Modal'
          onPress={() => setIsVisible(true)}
          color={colors.primary}
        />
      </View>

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 300,
            height: 200,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 5
          }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Modal body</Text>
            <Button
              title='Close'
              onPress={() => setIsVisible(false)}
              color={colors.primary}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}