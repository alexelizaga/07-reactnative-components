import React, {useState} from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

interface AlertState {
  showAlert: boolean
}
export const AlertScreen = () => {

  const [state, setState] = useState<AlertState>({showAlert: false});

  const hideAlert = () => {
    setState({
      showAlert: false
    });
    console.log('Ok/Cancel/Dismiss pressed');
  };

  const showAlert1 = () => {
    Alert.alert(
      'Title',
      'Este es el mensaje de la alerta',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: 'destructive'
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok pressed'),
          style: 'default'
        }
      ]
    )
  }

  const showAlert2 = () => {
    setState({
      showAlert: true
    });
  }

  const showAlert3 = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      ( value:string ) => console.log('info:', value),
      'plain-text',
      '',
      'email-address'
    );
  }

  const {showAlert} = state;

  return (
    <View style={[ globalStyles.container, globalStyles.margin]}>
      <HeaderTitle title='Alerts' />

      <View style={globalStyles.btn}>
        <Button
          title='Mostrar Alerta'
          onPress={ (Platform.OS === 'web') ? showAlert2 : showAlert1 }
        />
      </View>

      <View style={globalStyles.btn}>
        <Button
          title='Mostrar Promp'
          onPress={ showAlert3 }
        />
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Ok"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    </View>
  )
}