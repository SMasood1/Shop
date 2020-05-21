import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Header from "../components/UI/Header";
import ProductsOverViewScreen from "../screens/shop/ProductsOverViewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from '../screens/shop/CartScreen';
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductsOverView"
      screenOptions={({navigation})=>({
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans-bold"
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans"
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={Header}>
            <Item onPress={navigation.navigate('Cart')} title="Cart" iconName="md-cart" />
          </HeaderButtons>
        )
      })}
    >
      <Stack.Screen
        name="ProductsOverView"
        component={ProductsOverViewScreen}
        options={{
          title: "All Products"
        }}
      />
      {/* Need to get title route.param.title */}

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{}}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "All Products"
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
