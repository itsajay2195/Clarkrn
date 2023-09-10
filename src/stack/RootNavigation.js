import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SCREEN_CONSTANTS} from '../constants/ScreenConstants';
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
//initialRouteName={LOGGED_IN_SCREEN_NAME.dishReviewScreen}
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 20}
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
              options={{headerShown: true}}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;

const containerStyle = {flex: 1};
