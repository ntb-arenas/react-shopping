import React from "react";

const Navlinks = ({ filteredCategory, filterProduct, toggleNavLinks }) => {
  return (
    <div className="flex flex-col justify-center mx-auto text-xl divide-y divide-gray-300 ">
      <button
        className="py-5 transition duration-200 hover:text-neutral-500"
        onClick={() => {
          filterProduct("all");
          toggleNavLinks(false);
        }}
      >
        ALL PRODUCTS
      </button>

      {filteredCategory.map((category, index) => (
        <button
          key={index}
          className="py-5 transition duration-200 hover:text-neutral-500"
          onClick={() => {
            filterProduct(`${category}`);
            toggleNavLinks(false);
          }}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Navlinks;
