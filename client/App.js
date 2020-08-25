import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import ReduxThunk from "redux-thunk";

import Colors from "./constants/Colors";
import orderReducer from "./store/reducers/orders";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import authReducer from "./store/reducers/auth";
import ShopNavigator from "./navigation/ShopNavigator";
import AuthScreen from "./screens/user/AuthScreen";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: orderReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  let [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  let authNav = (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
      initialRouteName="SignIn"
    >
      <Stack.Screen
        name="SignIn"
        component={AuthScreen}
        options={{
          title: "Authentication",
          // animationTypeForReplace: state.isSignout ? "pop" : "push",
        }}
      />
      {/* <Stack.Screen name="SignUp" />
                <Stack.Screen name="ResetPassword" /> */}
    </Stack.Navigator>
  );
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          {userToken === null ? authNav : <ShopNavigator />}
        </NavigationContainer>
      </Provider>
    );
  }
}
