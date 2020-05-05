import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverViewScreen = ()=>{
    const products = useSelector(state => state.products.availbleProducts);
    return (
        <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>}>

        </FlatList>
    )
}

export default ProductsOverViewScreen;