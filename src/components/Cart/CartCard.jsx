import React, { useState, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdRemoveCircleOutline } from "react-icons/md";

const CartCard = ({ product, updateCart, total, setTotal }) => {
  const [productPrice, setProductPrice] = useState(product.price * product.qty);

  const handleAddClick = (product, action) => {
    if (action === "IncreaseQty") {
      updateCart(product, action);
      setProductPrice((prevState) => prevState + product.price);

      let updateTotal = total + product.price;
      setTotal(updateTotal);
    } else if (action === "DecreaseQty") {
      updateCart(product, action);
      if (product.qty > 1) {
        setProductPrice((prevState) => prevState - product.price);

        let updateTotal = total - product.price;
        setTotal(updateTotal);
      }
    } else {
      updateCart(product, action);

      let updateTotal = total - productPrice;
      setTotal(updateTotal);
    }
  };

  useEffect(() => {
    let updateTotal = total + product.price;
    setTotal(updateTotal);
  }, []);

  return (
    <div key={product.id} className="flex justify-between mt-3">
      <div className="flex">
        <img src={product.image} alt="" className="border max-w-[3.1rem] sm:max-w-[4.375rem]  mr-2 p-2 bg-white" />

        <div className="text-xs">
          <p>{product.title}</p>

          <button
            className="p-2 border border-gray-300"
            onClick={() => {
              handleAddClick(product, "DecreaseQty");
            }}
          >
            <MdRemoveCircleOutline />
          </button>
          <span className="px-2 ">{product.qty}</span>
          <button
            className="p-2 border border-gray-300"
            onClick={() => {
              handleAddClick(product, "IncreaseQty");
            }}
          >
            <IoMdAddCircleOutline />
          </button>

          <p className="mt-2 text-xs">
            Price: <span className="text-lg">€{productPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <div>
        <button
          className="p-2 text-white bg-red-500"
          onClick={() => {
            handleAddClick(product, "removeProduct");
          }}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
