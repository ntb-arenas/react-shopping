import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ products, filterProduct, toggleValue }) => {
  const productCategory = products.map((product) => product.category);
  const filteredCategory = [...new Set(productCategory)];

  return (
    <div className="text-xl divide-x divide-gray-300">
      <button className="px-5 py-2" onClick={() => filterProduct("all")}>
        ALL PRODUCTS
      </button>

      {filteredCategory.map((category, index) => (
        <button key={index} className="px-5 py-2" onClick={() => filterProduct(`${category}`)}>
          {category.toUpperCase()}
        </button>
      ))}

      <button className="px-5 py-2 text-2xl" onClick={toggleValue}>
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
};

export default Navbar;
