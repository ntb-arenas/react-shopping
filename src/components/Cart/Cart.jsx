import React from "react";
import { IoClose } from "react-icons/io5";
import { BsTrash } from "react-icons/bs";

const Cart = ({ cart, clearCart, isOpen, toggleValue }) => {
  console.log(cart);
  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} px-7 py-4 fixed top-0 z-10 transition-all duration-300 bg-gray-50 border border-orange-500 w-full h-full md:w-[40%] xl:w-[30%]`}>
      <div className="flex justify-between">
        <p>Shopping bag ({cart.length})</p>

        <button onClick={() => toggleValue(false)} className="text-red-500 text-[2rem]">
          <IoClose />
        </button>
      </div>

      <div className="mt-5">
        {cart.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>

      <div className="absolute bottom-10 right-10">
        <button onClick={clearCart} className="p-3 text-2xl bg-red-500 text-white">
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default Cart;
