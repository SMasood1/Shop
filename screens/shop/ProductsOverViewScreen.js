import React from 'react';
import { FlatList, Text} from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverViewScreen = ()=>{
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList 
            data={products} 
            renderItem={itemData => (
                <ProductItem 
                    image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    price={itemData.item.price}
                    onViewDetail={()=>{}}
                    onAddToCart={()=>{}}/>
                )}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}

export default ProductsOverViewScreen;