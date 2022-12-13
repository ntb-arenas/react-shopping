import React from "react";
import { IoClose } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdRemoveCircleOutline } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

const Cart = ({ cart, clearCart, updateCart, isCartOpen, toggleCart }) => {
  return (
    <div className={`${isCartOpen ? "right-0" : "-right-full"} p-5 fixed top-0 z-10 transition-all duration-300 bg-gray-100  w-full h-full md:w-[50%] xl:w-[30%]`}>
      <div className="flex justify-between mb-5">
        <p className="flex items-center ">Shopping bag ({cart.length} items)</p>

        <button onClick={() => toggleCart(false)} className="text-red-500 text-[2rem]">
          <IoClose />
        </button>
      </div>

      <div className="h-[60vh] overflow-y-auto">
        {cart.map((product) => (
          <div key={product.id} className="flex mt-3">
            <img src={product.image} alt="" className="border max-w-[3.1rem] sm:max-w-[4.375rem]  mr-2 p-2 bg-white" />

            <div className="text-xs">
              <p>{product.title}</p>

              <button
                className="p-2 border"
                onClick={() => {
                  updateCart(product, "DecreaseQty");
                }}
              >
                <MdRemoveCircleOutline />
              </button>
              <span className="px-2 border-gray-400 ">{product.qty}</span>
              <button
                className="p-2 border"
                onClick={() => {
                  updateCart(product, "IncreaseQty");
                }}
              >
                <IoMdAddCircleOutline />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 right-10">
        <button
          onClick={() => {
            clearCart();
            toggleCart(false);
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
