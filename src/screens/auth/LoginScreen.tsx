import React, {FC, useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors, Variables} from 'variables';
import {MyScreenProps} from 'types/types';
import {Card, MyButton, MyInput, MyLink, MyTitle} from 'components/ui';
import {useDispatch, useSelector} from 'react-redux';
import {login} from 'store/reducers/authSlice';

const LoginScreen: FC<MyScreenProps> = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const onPressHandler = async (): Promise<void> => {
    try {
      await dispatch(login({email, password})).unwrap();
      props.navigation.navigate('Profile');
    } catch (err: any) {
      Alert.alert(err.message);
    }
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.box}>
        <MyTitle text="Login..." />
        <View style={styles.space}>
          <MyInput
            label="Email:"
            placeholder="type email..."
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={styles.space}>
          <MyInput
            label="Password:"
            placeholder="type password..."
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={styles.space}>
          <MyButton loading={loading} onPress={onPressHandler}>
            login
          </MyButton>
        </View>
        <MyLink onPress={() => props.navigation.navigate('Register')}>
          don't have an account?
        </MyLink>
      </Card>
    </View>
  );
};

export const loginOptions: NativeStackNavigationOptions = {};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Variables.screenPadding,
  },
  box: {
    paddingHorizontal: 20,
    marginHorizontal: 7,
    paddingVertical: 50,
    alignItems: 'stretch',
    backgroundColor: Colors.whiteColor,
    borderRadius: 10,
  },
  space: {
    marginVertical: 17,
  },
});
