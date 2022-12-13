import React from "react";
import { IoMdAdd } from "react-icons/io";

const ProductProductCard = ({ product, updateCart }) => {
  // Destructure product
  const { image, title, price, rating } = product;

  return (
    <div className="relative flex flex-col justify-between p-2 text-xs transition group sm:text-base">
      <div>
        <div className="p-5">
          <img src={image} className="max-h-[200px] mx-auto group-hover:scale-110 transition duration-300" alt="" />
        </div>
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="absolute hidden transition-all duration-300 bg-orange-500 opacity-0 sm:inline-block top-5 -right-0 group-hover:opacity-100 group-hover:right-5 hover:bg-orange-300">
        <button
          onClick={() => {
            updateCart(product, "IncreaseQty");
          }}
          className="p-3 text-white"
        >
          <IoMdAdd />
        </button>
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <p>Rating: {rating.rate}</p>
          <p className="text-base sm:text-xl">
            <span>€</span>
            {price}
          </p>
        </div>
        <button
          onClick={() => {
            updateCart(product, "IncreaseQty");
          }}
          className="p-3 text-white transition-all duration-300 bg-orange-500 sm:hidden group-hover:opacity-100 hover:bg-orange-300"
        >
          <IoMdAdd />
        </button>
      </div>
    </div>
  );
};

export default ProductProductCard;
