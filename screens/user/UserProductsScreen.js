import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const UserProductsScreen = () => {
  const userProducts = useSelector(state => state.product.useSelector);
  return (
    <FlatList
      data={ProductItem}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={()=>{}}
          onAddToCart={()=>{}}
        />
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});
export default UserProductsScreen;
