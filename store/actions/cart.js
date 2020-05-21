export const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (addedProduct)=>{
    return {
        type: ADD_TO_CART,
        product: addedProduct
    }
};
