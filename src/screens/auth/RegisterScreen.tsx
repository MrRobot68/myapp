import React, {FC, Fragment, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors, Variables} from 'variables';
import {MyScreenProps} from 'types/types';
import {Card, MyButton, MyInput, MyLink, MyTitle} from 'components/ui';
import {useDispatch, useSelector} from 'react-redux';
import {register} from 'store/reducers/authSlice';

const RegisterScreen: FC<MyScreenProps> = props => {
  const [firstStepCompleted, setFirstStepCompleted] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  const {loading} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const onPressHandler = async (): Promise<void> => {
    if (firstStepCompleted) {
      if (password !== repassword) {
        Alert.alert("passwords don't match");
        return;
      }
      try {
        await dispatch(
          register({email, firstname, lastname, password}),
        ).unwrap();
      } catch (err: any) {
        Alert.alert(err.message);
      }
    } else {
      if (email.trim() && firstname.trim() && lastname.trim()) {
        setFirstStepCompleted(true);
      } else {
        Alert.alert('validation failed!');
      }
    }
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.box}>
        <MyTitle text={firstStepCompleted ? 'Detail >>>' : 'Register'} />
        {!firstStepCompleted ? (
          <Fragment>
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
                label="firstname:"
                placeholder="type firstname..."
                value={firstname}
                onChangeText={value => setFirstname(value)}
              />
            </View>
            <View style={styles.space}>
              <MyInput
                label="lastname:"
                placeholder="type lastname..."
                value={lastname}
                onChangeText={value => setLastname(value)}
              />
            </View>
          </Fragment>
        ) : (
          <Fragment>
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
              <MyInput
                label="Repeat Password:"
                placeholder="retype password..."
                secureTextEntry
                value={repassword}
                onChangeText={value => setRePassword(value)}
              />
            </View>
          </Fragment>
        )}

        <View style={styles.space}>
          <MyButton loading={loading} onPress={onPressHandler}>
            {firstStepCompleted ? 'finish' : 'continue'}
          </MyButton>
        </View>
        <MyLink onPress={() => props.navigation.navigate('Login')}>
          already have an account?
        </MyLink>
      </Card>
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
