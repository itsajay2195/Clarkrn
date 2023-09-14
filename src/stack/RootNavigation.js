import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SCREEN_CONSTANTS} from '../constants/ScreenConstants';
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import appConfig from '../styles/theme';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={appConfig.os.ios ? 'padding' : 'height'}
          keyboardVerticalOffset={appConfig.os.ios ? -64 : 20}
          style={containerStyle}>
          <Stack.Navigator>
            <Stack.Screen
              name={SCREEN_CONSTANTS.productList}
              component={ProductListScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={SCREEN_CONSTANTS.productDetails}
              component={ProductDetailsScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;

const containerStyle = {flex: 1};
