import React, { useEffect, useState } from "react";

const Navbar = ({ handleClick }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="text-xl divide-x divide-gray-300">
      <button className="px-5 py-2" onClick={(e) => handleClick("")}>
        ALL PRODUCTS
      </button>

      {category.map((category, index) => (
        <button key={index} className="px-5 py-2" onClick={() => handleClick(`category/${category}`)}>
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
