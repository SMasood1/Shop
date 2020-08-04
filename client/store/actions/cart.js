export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_CART = "SET_CART";

export const fetchCartItems = () => {
  return async dispatch => {
    try {
      const response = await fetch("http://0fc20b6001d8.ngrok.io/cart");
      if (!response.ok) {
        let e = new Error("HTTP request failure (fetchCart)!");
        e.name = "NetworkError";
        throw e;
      }
      let loadedCart = await response.json();
      dispatch({
        type: SET_CART,
        body: loadedCart
      });
    } catch (error) {
      if (error.name === "NetworkError") {
        console.log(error.name, error.message);
      } else {
        throw error;
      }
    }
  };
};
export const addToCart = addedProduct => {
  return async dispatch => {
    try {
      const response = await fetch("http://0fc20b6001d8.ngrok.io/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: addedProduct.title,
          price: addedProduct.price,
          id: addedProduct.id
        })
      });
      if (!response.ok) {
        let e = new Error("HTTP request failure (addToCart)!");
        e.name = "NetworkError";
        throw e;
      }
      dispatch({
        type: ADD_TO_CART,
        product: addedProduct
      });
    } catch (error) {
      console.log(error.name, error.message);
    }
  };
};
export const removeFromCart = productId => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://0fc20b6001d8.ngrok.io/delete-cart-item/${productId}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        let e = new Error("HTTP request failure (removeFromCart)!");
        e.name = "NetworkError";
        throw e;
      }
      dispatch({
        type: REMOVE_FROM_CART,
        pid: productId
      });
    } catch (error) {
      console.log(error.name, error.message);
    }
  };
};
