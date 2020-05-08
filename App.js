import React from 'react';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import productReducer from './store/reducers/products';
import StackNavigator from './navigation/StackNavigator'

const rootReducer = combineReducers({
  products: productReducer,
})

const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          {/* Getting an error because of StackNavigator*/}
          <StackNavigator/>
        </NavigationContainer>
      </Provider>
      
    );
  }
}
