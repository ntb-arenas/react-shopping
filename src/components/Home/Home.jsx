import React from "react";
// Import components
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
// Import custom hooks
import useProductApi from "../../hooks/useProductApi";
import useCart from "../../hooks/useCart";
import useToggle from "../../hooks/useToggle";

const Home = () => {
  const { data, products, filterProduct } = useProductApi([]);
  const { cart, addItemCart, clearCart } = useCart([]);
  const { value, toggleValue } = useToggle(false);
  return (
    <div className="container mx-auto mt-5 overflow-x-hidden font-poppins">
      {<Cart cart={cart} clearCart={clearCart} isOpen={value} toggleValue={toggleValue} />}

      <div className={`${value && " transition duration-300"}`}>
        <Navbar filterProduct={filterProduct} products={data} cart={cart} toggleValue={toggleValue} />

        <div className="grid grid-cols-2 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <Card key={product.id} product={product} addItem={addItemCart} toggleValue={toggleValue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
