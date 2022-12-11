import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavbarLg = ({ allProducts, filterProduct, toggleCart, cart }) => {
  const productCategory = allProducts.map((product) => product.category);
  const filteredCategory = [...new Set(productCategory)];

  return (
    <div className="flex-wrap justify-center hidden mx-auto text-xl divide-x divide-gray-300 md:flex ">
      <button className="px-5 py-2 transition duration-200 hover:text-neutral-500" onClick={() => filterProduct("all")}>
        ALL PRODUCTS
      </button>

      {filteredCategory.map((category, index) => (
        <button key={index} className="px-5 py-2 transition duration-200 hover:text-neutral-500" onClick={() => filterProduct(`${category}`)}>
          {category.toUpperCase()}
        </button>
      ))}

      <div className="flex items-center px-5">
        <button className="absolute flex items-center text-2xl transition duration-200 hover:text-neutral-500" onClick={toggleCart}>
          <AiOutlineShoppingCart />
          <span className="relative text-base -top-3">{cart.length}</span>
        </button>
      </div>
    </div>
  );
};

export default NavbarLg;
