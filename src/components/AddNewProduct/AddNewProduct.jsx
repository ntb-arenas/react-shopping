import React from "react";
import useToggle from "../../hooks/useToggle";
import ProductForm from "../ProductForm/ProductForm";

const AddNewProduct = () => {
  const { value: isOpen, toggleValue } = useToggle(false);
  return (
    <div className={`${isOpen ? "bottom-0" : "bottom-[-45%]"} fixed transition-all duration-300 left-0 w-full h-[50vh]`}>
      <div className="text-center">
        <button
          className={`${isOpen ? "bg-red-500" : "bg-orange-400 mb-10"} px-5 py-2 text-white `}
          onClick={() => {
            toggleValue();
          }}
        >
          {isOpen ? "Close" : "Add New Product"}
        </button>
      </div>
      <div className="h-full bg-gray-800">
        <ProductForm />
      </div>
    </div>
  );
};

export default AddNewProduct;
