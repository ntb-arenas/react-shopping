import React from "react";
// Import components
import ProductCard from "../ProductCard/ProductCard";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
// Import custom hooks
import useProductApi from "../../hooks/useProductApi";
import useCart from "../../hooks/useCart";
import useToggle from "../../hooks/useToggle";

const Home = () => {
  const { allProducts, filteredProducts, filterProduct } = useProductApi([]);
  const { cart, addItemCart, clearCart } = useCart([]);
  const { value: isCartOpen, toggleValue: toggleCart } = useToggle(false);

  return (
    <div className="container pt-5 mx-auto overflow-x-hidden font-poppins">
      <Cart cart={cart} clearCart={clearCart} isCartOpen={isCartOpen} toggleCart={toggleCart} />

      <Navbar filterProduct={filterProduct} allProducts={allProducts} cart={cart} toggleCart={toggleCart} />

      <div className="grid grid-cols-2 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addItem={addItemCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
