import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

export const TextInputScreen = () => {
  interface FormState {
    name: string;
    email: string;
    phone: string;
  }
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
  });

  const onChange = ( value:string, field: keyof FormState ) => {
    setForm({
      ...form,
      [field]:value
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView>
          <View style={ globalStyles.margin }>
            <HeaderTitle title='Text Input' />
            <TextInput
              style={ styles.input }
              placeholder={'Nombre'}
              autoCorrect={false}
              autoCapitalize= "words"
              onChangeText={(value) => onChange( value, 'name')}
            />

            <TextInput
              style={ styles.input }
              placeholder={'Email'}
              autoCorrect={false}
              autoCapitalize= "none"
              onChangeText={(value) => onChange( value, 'email')}
              keyboardType="email-address"
            />

            <TextInput
              style={ styles.input }
              placeholder={'Phone'}
              onChangeText={(value) => onChange( value, 'phone')}
              keyboardType="phone-pad"
            />

            <View>
              <Text>{ JSON.stringify(form, null, 5)}</Text>
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
  }
});