const CART = {
  products: {},
  totalAmount: 0
};

module.exports = class Cart {
  static addProduct(item) {
    let updatedProduct = null;
    let itemId = item.id;

    if (CART.products[itemId]) {
      updatedProduct = { ...CART.products[itemId] };
      updatedProduct.quantity = updatedProduct.quantity + 1;
      updatedProduct.sum = updatedProduct.sum + updatedProduct.price;
    } else {
      updatedProduct = {
        quantity: 1,
        price: item.price,
        title: item.title,
        sum: item.price
      };
    }
    CART.totalAmount = CART.totalAmount + item.price;
    CART.products[itemId] = { ...updatedProduct };
  }
  static fetchAll() {
    return CART;
  }
  static deleteAProduct(id){
    const product = {...CART.products[id]};
    if(product.quantity === 1){
      delete CART.products[id];
    }
    else{
      product.quantity -= 1;
      product.sum -= product.price;
      CART.products[id] = product; 
    }
    CART.totalAmount -= product.price;
  }
  static deleteProduct(id){
    const product = {...CART.products[id]};
    delete CART.products[id];
    let quantity = product.quantity;
    let price = product.price; 
    CART.totalAmount -= (quantity * price);
  }
};
