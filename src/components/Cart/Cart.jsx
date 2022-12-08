import React from "react";

const Cart = ({ cart }) => {
  const displayCart = cart.map((item) => {
    return <h1 key={item.id}>{item.title}</h1>;
  });

  console.log(cart);

  return <div>{displayCart}</div>;
};

export default Cart;
