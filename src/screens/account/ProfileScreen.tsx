import {Button, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors, Variables} from 'variables';
import {MyScreenProps} from 'types/types';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from 'store/reducers/authSlice';

const ProfileScreen: FC<MyScreenProps> = props => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout(null));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.name}>Name:{user.name}</Text>
      <Text style={styles.email}>Email:{user.email}</Text>
      <Button title="logout" onPress={logoutHandler} />
    </View>
  );
};

export const profileOptions: NativeStackNavigationOptions = {};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Variables.screenPadding,
  },
  name: {
    marginVertical: 20,
    fontWeight: '700',
  },
  email: {
    marginVertical: 20,
  },
});
