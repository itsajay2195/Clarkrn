import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/stack/RootNavigation';
import {ProductContextProvider} from './src/context/ProductContext';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <ProductContextProvider>
      <RootNavigation />
    </ProductContextProvider>
  );
};

export default App;
