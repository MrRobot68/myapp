import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen, {profileOptions} from 'screens/account/ProfileScreen';
import SettingsScreen, {settingsOptions} from 'screens/account/SettingsScreen';

const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={profileOptions}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={settingsOptions}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
