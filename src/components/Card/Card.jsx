import React from "react";
import { IoMdAdd } from "react-icons/io";

const Card = ({ product, addItem }) => {
  // Destructure product
  const { image, title, price, rating } = product;

  return (
    <div className="relative flex flex-col justify-between p-2 text-xs transition border group sm:text-base">
      <div>
        <div className="p-5">
          <img src={image} className="max-h-[200px] mx-auto group-hover:scale-110 transition duration-300" alt="" />
        </div>
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="absolute transition-all duration-300 bg-orange-500 opacity-0 top-5 -right-20 group-hover:opacity-100 group-hover:right-5">
        <button
          onClick={() => {
            addItem(product);
          }}
          className="p-3 text-white"
        >
          <IoMdAdd />
        </button>
      </div>

      <div className="mt-2">
        <p>Rating: {rating.rate}</p>
        <p className="text-base sm:text-xl">
          <span>€</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
