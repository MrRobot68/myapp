import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors, Variables} from 'variables';
import {MyScreenProps} from 'types/types';
import {MyButton, MyInput} from 'components/ui';

const RegisterScreen: FC<MyScreenProps> = props => {
  const [loading, setLoading] = useState(false);

  const onPressHandler = (): void => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <MyInput label="name" />
        <MyButton loading={loading} onPress={onPressHandler}>
          register
        </MyButton>
      </View>
    </View>
  );
};

export const registerOptions: NativeStackNavigationOptions = {};

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Variables.screenPadding,
  },
  box: {
    padding: 50,
    alignItems: 'stretch',
  },
});
