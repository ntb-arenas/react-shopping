import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addItemCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return {
    cart,
    addItemCart,
  };
};

export default useCart;
