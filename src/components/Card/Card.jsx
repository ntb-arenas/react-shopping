import React, { useState } from "react";

const Card = ({ item, addItem }) => {
  const [isAdded, setIsAdded] = useState(true);

  return (
    <div className="flex flex-col justify-between p-2 border">
      <div>
        <img src={item.image} className="max-h-[200px] mx-auto" alt="" />
        <h1 className="font-bold ">{item.title}</h1>
      </div>

      <div className="mt-2">
        <p>Rating: {item.rating.rate}</p>
        <p className="text-xl">
          <span>€</span>
          {item.price}
        </p>

        <button
          onClick={() => {
            if (isAdded) {
              addItem(item);
              setIsAdded(!isAdded);
            } else {
              console.log("Product already added");
            }
          }}
          className="w-full py-2 mt-5 text-orange-500 border-2 border-orange-500 rounded"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
