import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ filteredProducts, updateCart }) => {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default ProductList;
