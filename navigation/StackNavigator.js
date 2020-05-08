import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native'
import { useSelector } from 'react-redux'

import ProductsOverViewScreen from '../screens/shop/ProductsOverViewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/colors';

const Stack = createStackNavigator();

const StackNavigator = ()=>{

  return (
    <Stack.Navigator
      initialRouteName="ProductsOverView"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white': Colors.primary,
        headerTitleStyle: {
          fontFamily: 'open-sans-bold'
        } ,
        headerBackTitleStyle: {
          fontFamily: 'open-sans'
        }
      }}
    >
      <Stack.Screen  
      name='ProductsOverView' 
      component={ProductsOverViewScreen}
      options={{
          title: 'All Products'
      }}
      />
      {/* Need to get title route.param.title */}

      <Stack.Screen
      name='ProductDetail'
      component={ProductDetailScreen}
      options={{
        
      }}
      />
    </Stack.Navigator> 
  )
}

export default StackNavigator;