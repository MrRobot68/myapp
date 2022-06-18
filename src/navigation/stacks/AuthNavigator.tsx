import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen, {registerOptions} from 'screens/auth/RegisterScreen';
import LoginScreen, {loginOptions} from 'screens/auth/LoginScreen';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={loginOptions}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={registerOptions}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
