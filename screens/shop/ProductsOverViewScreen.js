import React from 'react';
import { FlatList } from 'react-native';
import { useSelectore } from 'react-redux';

const ProductsOverViewScreen = ()=>{
    const products = useSelectore(state => state.products.availbleProducts);
    return (
        <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>}>

        </FlatList>
    )
}

export default ProductsOverViewScreen;