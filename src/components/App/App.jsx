import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/Navbar";

function App() {
  const [resourceType, setResourceType] = useState("");
  const [cart, setCart] = useState([]);
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [resourceType]);

  const handleClick = (category) => {
    setResourceType(category);
  };

  console.log(cart.length);

  const addItemCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container mx-auto mt-5 font-poppins">
      <div className="text-center ">
        <Navbar handleClick={handleClick} />
      </div>

      <div className="text-center ">{cart && <Cart cart={cart} />}</div>

      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => (
          <Card key={item.id} item={item} addItem={addItemCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
