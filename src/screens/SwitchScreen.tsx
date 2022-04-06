import React, {useState} from 'react';
import { View, Switch, StyleSheet, Platform, Text } from 'react-native';
import { colors } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {

  type State = {
    isActive: boolean,
    isHungry: boolean,
    isHappy: boolean
  };

  const [state, setState] = useState<State>({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const onChange = ( value: boolean, field: keyof State ) => {
    setState({
      ...state,
      [field]: value
    });
  };

  const { isActive, isHappy, isHungry } = state;

  return (
    <View style={styles.container}>
      <HeaderTitle title='Switches' />

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value,'isActive')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value,'isHungry')}/>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value,'isHappy')}/>
      </View>
      

      <Text style={ styles.switchState }>
        {
          JSON.stringify(state, null, 5)
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
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