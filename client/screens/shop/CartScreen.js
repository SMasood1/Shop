import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/UI/Card";
import CartItem from "../../components/shop/CartItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/orders";

const CartScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const cartTotalAmount = useSelector(state => {
    return state.cart.totalAmount;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.fetchCartItems());
  }, [dispatch]);

  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].title,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
    setIsLoading(false);
  };
  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summeryText}>
          <Text style={styles.amount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="small" color={Colors.primary} />
        ) : (
          <Button
            title="Order Now"
            color={Colors.accent}
            disabled={cartItems.length === 0}
            onPress={sendOrderHandler}
          />
        )}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.productId}
        renderItem={itemData => (
          <CartItem
            deleteable
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(cartActions.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10
  },
  summeryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  },
  amount: {
    color: Colors.primary
  }
});

export default CartScreen;
