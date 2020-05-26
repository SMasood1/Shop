import React from "react";
import { View, SafeAreaView, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList
} from "@react-navigation/drawer";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import HeaderButton from "../components/UI/HeaderButton";
import ProductsOverViewScreen from "../screens/shop/ProductsOverViewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import Colors from "../constants/Colors";

// Styling to be applyed to all screens
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  }
};

const ProductsStackNavigator = createStackNavigator();

// Navigation for Products screen
const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator
      initialRouteName="ProductsOverView"
      screenOptions={({ navigation }) => ({
        ...defaultNavOptions
      })}
    >
      <ProductsStackNavigator.Screen
        name="ProductsOverView"
        component={ProductsOverViewScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                onPress={() => navigation.toggleDrawer()}
                title="Menu"
                iconName="md-menu"
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                onPress={() => navigation.navigate("Cart")}
                title="Cart"
                iconName="md-cart"
              />
            </HeaderButtons>
          ),
          title: "All Products"
        })}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: "Product Detail"
        }}
      />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "All Products"
        }}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();

// Navigation for Orders screen
const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        ...defaultNavOptions,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              onPress={() => navigation.toggleDrawer()}
              title="Menu"
              iconName="md-menu"
            />
          </HeaderButtons>
        )
      })}
    >
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          title: "Your Orders"
        }}
      />
    </OrdersStackNavigator.Navigator>
  );
};

const ShopDrawrNavigator = createDrawerNavigator();

// Side drawer Navigator takes navigator for the other screens
const ShopNavigator = () => {
  return (
    <ShopDrawrNavigator.Navigator
      drawerContent={props => {
        return (
          <View>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <DrawerItemList {...props}>
                <Button
                  title="Logout"
                  colors={Colors.primary}
                  onPress={() => {}}
                />
              </DrawerItemList>
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{ activeTintColor: Colors.primary }}
    >
      <ShopDrawrNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            ></Ionicons>
          )
        }}
      />
      <ShopDrawrNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: props => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            ></Ionicons>
          )
        }}
      />
    </ShopDrawrNavigator.Navigator>
  );
};

export default ShopNavigator;
