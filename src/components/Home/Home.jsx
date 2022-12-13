import React from "react";
// Import components
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
import ProductList from "../ProductList/ProductList";
// Import custom hooks
import useProductApi from "../../hooks/useProductApi";
import useCart from "../../hooks/useCart";
import useToggle from "../../hooks/useToggle";

const Home = () => {
  const { allProducts, filteredProducts, filterProduct } = useProductApi([]);
  const { cart, updateCart, clearCart } = useCart([]);
  const { value: isCartOpen, toggleValue: toggleCart } = useToggle(false);

  return (
    <div className="container pt-5 mx-auto overflow-x-hidden font-poppins">
      <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <Navbar filterProduct={filterProduct} allProducts={allProducts} cart={cart} toggleCart={toggleCart} />
      <ProductList filteredProducts={filteredProducts} updateCart={updateCart} />
    </div>
  );
};

export default Home;
