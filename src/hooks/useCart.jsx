import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const updateCart = (item, action) => {
    //Check if product already exists and return true
    const cartFind = cart.map((cartItem) => cartItem.id).includes(item.id);

    if (cartFind) {
      // If cartfind true, update product quantity to +1
      const updateProductQty = cart.map((cartItem) => {
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
      // Set updated array to cart
      setCart(updateProductQty);
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
