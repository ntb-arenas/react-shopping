import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdRemoveCircleOutline } from "react-icons/md";

const CartCard = ({ product, updateCart }) => {
  return (
    <div key={product.id} className="flex justify-between mt-3">
      <div className="flex">
        <img src={product.image} alt="" className="border max-w-[3.1rem] sm:max-w-[4.375rem]  mr-2 p-2 bg-white" />

        <div className="text-xs">
          <p>{product.title}</p>

          <button
            className="p-2 border border-gray-300"
            onClick={() => {
              updateCart(product, "DecreaseQty");
            }}
          >
            <MdRemoveCircleOutline />
          </button>
          <span className="px-2 ">{product.qty}</span>
          <button
            className="p-2 border border-gray-300"
            onClick={() => {
              updateCart(product, "IncreaseQty");
            }}
          >
            <IoMdAddCircleOutline />
          </button>

          <p className="text-sm text-bold">Price: €test</p>
        </div>
      </div>

      <div>
        <button
          className="p-2 bg-red-500 text-white"
          onClick={() => {
            updateCart(product, "removeProduct");
          }}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
