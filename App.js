import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigation from './src/stack/RootNavigation';
import {ProductContextProvider} from './src/context/ProductContext';

const App = () => {
  return (
    <ProductContextProvider>
      <RootNavigation />
    </ProductContextProvider>
  );
};

export default App;
