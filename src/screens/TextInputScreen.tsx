import React, {useContext} from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContest';

export const TextInputScreen = () => {

  const { theme:{colors} } = useContext(ThemeContext);

  const { onChange, form, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
          <View style={ globalStyles.margin }>
            <HeaderTitle title='Text Input' />
            <TextInput
              style={ [styles.input, {backgroundColor: colors.text, color: colors.background}] }
              placeholder={'Nombre'}
              autoCorrect={false}
              autoCapitalize= "words"
              onChangeText={(value) => onChange( value, 'name')}
            />

            <TextInput
              style={ [styles.input, {backgroundColor: colors.text, color: colors.background}] }
              placeholder={'Email'}
              autoCorrect={false}
              autoCapitalize= "none"
              onChangeText={(value) => onChange( value, 'email')}
              keyboardType="email-address"
            />

            <TextInput
              style={ [styles.input, {backgroundColor: colors.text, color: colors.background}] }
              placeholder={'Phone'}
              onChangeText={(value) => onChange( value, 'phone')}
              keyboardType="phone-pad"
            />

            <View style={styles.switchRow}>
              <Text style={[styles.switchText, {color: colors.text}]}>Subscribirme</Text>
              <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value,'isSubscribed')}/>
            </View>

            <View>
              <Text style={{ color: colors.text }}>{ JSON.stringify(form, null, 5)}</Text>
            </View>

          </View>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  switchText: {
    fontSize: 25
  },
  switchState: {
    marginTop: 50,
    fontSize: 25
  }
});