import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native'

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
          }}
        >
            <Stack.Screen  
            name='ProductsOverView' 
            component={ProductsOverViewScreen}
            options={{
                title: 'All Products'
            }}
            />
            <Stack.Screen
            name='ProductDetail'
            component={ProductDetailScreen}
            options={(
                ({route}) => ({
                title: ()=>{
                    route.params.productId
                }
                })
            )}
            />
        </Stack.Navigator> 
    )
}

export default StackNavigator;