import AppNavigator from 'navigation/AppNavigator';
import React from 'react';
import {StatusBar, SafeAreaView, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import store from 'store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
