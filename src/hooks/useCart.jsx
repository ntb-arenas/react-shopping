import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addItemCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);

    const cartFind = cart.map((cartItem) => cartItem.id).includes(item.id);

    if (cartFind) {
      setCart((prevCart) => prevCart.filter((cartItem, index, arr) => index === arr.findIndex((c) => c.id === cartItem.id)));
      console.log("already added");
    }
  };

  return {
    cart,
    addItemCart,
  };
};

export default useCart;
