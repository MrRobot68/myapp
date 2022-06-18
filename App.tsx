import AppNavigator from 'navigation/AppNavigator';
import React from 'react';
import {StatusBar, SafeAreaView, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
