import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native'

import productReducer from './store/reducers/products';
import ProductsOverViewScreen from './components/shop/ProductsOverViewScreen';
import Colors from './constants/colors';

const rootReducer = combineReducers({
  products: productReducer,
})

const store = createStore(rootReducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary,
          }}
        >
          <Stack.Screen component={ProductsOverViewScreen}/>
        </Stack.Navigator>   
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
