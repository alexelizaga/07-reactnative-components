import React, {useContext, useState} from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/ThemeContext';

interface AlertState {
  showAlert: boolean
}
export const AlertScreen = () => {

  const { theme:{colors} } = useContext(ThemeContext);
  const [state, setState] = useState<AlertState>({showAlert: false});

  const showWebAlert = () => {
    setState({
      showAlert: true
    });
  }

  const cancelWebAlert = () => {
    setState({
      showAlert: false
    });
    console.log('Cancel/Dismiss pressed');
  };

  const confirmWebAlert = () => {
    setState({
      showAlert: false
    });
    console.log('Ok pressed');
  };

  const showNativeAlert = () => {
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

  const showPromptAlert = () => {
    Alert.prompt(
      '¿Está seguro?',
      'Esta acción no se puede revertir',
      ( value:string ) => console.log('info:', value),
      'plain-text',
      '',
      'email-address'
    );
  }

  const { showAlert } = state;

  return (
    <View style={[ globalStyles.container, globalStyles.margin]}>
      <HeaderTitle title='Alerts' />

      <View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title='Show alert'
          onPress={ (Platform.OS === 'web') ? showWebAlert : showNativeAlert }
          color={colors.primary}
        />

        {
          Platform.OS === 'ios' && (
            <View style={{marginTop: 10}}>
              <Button
                title='Show promp alert'
                onPress={ showPromptAlert }
                color={colors.primary}
              />
            </View>
          )
        }
      </View>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Ok"
        confirmButtonColor={colors.primary}
        onCancelPressed={() => {
          cancelWebAlert();
        }}
        onConfirmPressed={() => {
          confirmWebAlert();
        }}
      />

    </View>
  )
}