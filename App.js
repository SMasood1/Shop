import React from 'react';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import productReducer from './store/reducers/products';
import StackNavigator from './navigation/StackNavigator'

const rootReducer = combineReducers({
  products: productReducer,
})

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
