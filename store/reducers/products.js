import PRODUCTS from '../../data/original';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),

}

export default (state = initialState, action)=>{
    return state;
}