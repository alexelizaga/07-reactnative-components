import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={globalStyles.margin}>
      <HeaderTitle title='Modal screen' />
      
      <Button title='Abrir Modal' onPress={() => setIsVisible(true)} />

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent={true}
      >
        <View style={{
          flex: 1,
          // height: 100,
          // width: 100,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            backgroundColor: 'white'
          }}>
            <HeaderTitle title='Modal' />
            <Text>Cuerpo del modal</Text>
            <Button title='Cerrar' onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  )
}