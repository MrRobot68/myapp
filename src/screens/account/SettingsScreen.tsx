import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Colors, Variables} from 'variables';

const SettingsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

export const settingsOptions: NativeStackNavigationOptions = {};

export default SettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Variables.screenPadding,
  },
});
