import React, { useState } from "react";

const Card = ({ item, addItem, toggleValue }) => {
  const [isAdded, setIsAdded] = useState(true);

  return (
    <div className="relative flex flex-col justify-between p-2 overflow-hidden transition border group">
      <div>
        <div className="p-5">
          <img src={item.image} className="max-h-[200px] mx-auto group-hover:scale-110 transition duration-300" alt="" />
        </div>
        <h1 className="font-bold ">{item.title}</h1>
      </div>

      <div className="absolute transition-all duration-300 bg-orange-500 opacity-0 top-5 -right-20 group-hover:opacity-100 group-hover:right-5">
        <button
          onClick={() => {
            toggleValue(true);
            if (isAdded) {
              addItem(item);
              setIsAdded(!isAdded);
            } else {
              console.log("Product already added");
            }
          }}
          className="p-3 text-white"
        >
          ADD TO CART
        </button>
      </div>

      <div className="mt-2">
        <p>Rating: {item.rating.rate}</p>
        <p className="text-xl">
          <span>€</span>
          {item.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
