import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";
import CartCard from "./CartCard";

const Cart = ({ cart, clearCart, updateCart, isCartOpen, toggleCart }) => {
  const [total, setTotal] = useState(0);
  console.log(cart);
  return (
    <div className={`${isCartOpen ? "right-0" : "-right-full"} p-5 fixed top-0 z-10 transition-all duration-300 bg-gray-100  w-full h-full md:w-[50%] xl:w-[30%]`}>
      <div className="flex justify-between mb-5">
        <p className="flex items-center ">Shopping bag ({cart.length} items)</p>

        <button onClick={() => toggleCart(false)} className="text-red-500 text-[2rem]">
          <IoClose />
        </button>
      </div>

      <div className="h-[60vh] overflow-y-auto">
        {cart.map((product, index) => (
          <CartCard key={index} product={product} updateCart={updateCart} setTotal={setTotal} total={total} />
        ))}
      </div>

      <div className="px-5 py-2 bg-white border">
        <h3>
          Total: <span className="text-2xl">€{total.toFixed(2)}</span>
        </h3>
      </div>

      <div className="absolute bottom-10 right-10">
        <button
          onClick={() => {
            clearCart();
            toggleCart(false);
            setTotal(0);
          }}
          className="p-3 text-2xl text-white bg-red-500"
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default Cart;
