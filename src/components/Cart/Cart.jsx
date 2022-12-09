import React from "react";

const Cart = ({ cart, isOpen, toggleValue }) => {
  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} p-4 fixed top-0 z-10 transition-all duration-300 bg-gray-50 border border-orange-500 w-full h-full md:w-[40%] xl:w-[30%]`}>
      <div className="flex justify-between">
        <p>Shopping bag ({cart.length})</p>
        <button onClick={() => toggleValue(false)} className="">
          close
        </button>
      </div>

      <div className="mt-5">
        {cart.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Cart;
