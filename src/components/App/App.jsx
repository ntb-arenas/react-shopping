import React from "react";
// Import components
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";
// Import custom hooks
import useItemApi from "../../hooks/useItemApi";
import useCart from "../../hooks/useCart";
import useToggle from "../../hooks/useToggle";

function App() {
  const { items, handleClick } = useItemApi([]);
  const { cart, addItemCart, clearCart } = useCart([]);
  const { value, toggleValue } = useToggle(false);

  console.log(items);

  return (
    <div className="container mx-auto mt-5 font-poppins">
      <div className="text-center ">
        <Navbar handleClick={handleClick} products={items} toggleValue={toggleValue} />
      </div>

      {<Cart cart={cart} clearCart={clearCart} isOpen={value} toggleValue={toggleValue} />}

      <div className="grid grid-cols-2 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => (
          <Card key={item.id} item={item} addItem={addItemCart} toggleValue={toggleValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
