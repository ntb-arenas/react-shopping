import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, action) => {
    //Check if product already exists and return true
    const cartFind = cart.map((cartItem) => cartItem.id).includes(item.id);
    // If cartfind true, update products on cart
    if (cartFind) {
      // If action is equals to removeProduct, remove the product from array
      if (action === "removeProduct") {
        const updateProduct = cart.filter((product) => product.id !== item.id);

        setCart(updateProduct);
      } else {
        // Else, map through cart and check if action is equals to IncreaseQty or DecreaseQty
        const updateProduct = cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            if (action === "IncreaseQty") {
              return {
                ...cartItem,
                qty: cartItem.qty + 1,
              };
            } else if (action === "DecreaseQty") {
              if (cartItem.qty > 1) {
                return {
                  ...cartItem,
                  qty: cartItem.qty - 1,
                };
              }
            }
          }
          return cartItem;
        });
        setCart(updateProduct);
      }
    } else {
      // If cartfind false, add new product to array and add new product property qty + 1
      setCart((prevCart) => [...prevCart, { ...item, qty: 1 }]);
    }
  };

  const clearCart = () => {
    // Reset cart array
    setCart([]);
  };

  return {
    cart,
    updateCart,
    clearCart,
  };
};

export default useCart;
