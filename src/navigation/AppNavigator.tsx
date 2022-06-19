import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './stacks/AuthNavigator';
import {useToken} from 'hooks';
import MainNavigator from './stacks/MainNavigator';

const AppNavigator = () => {
  const token = useToken();

  return (
    <NavigationContainer>
      {token ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
