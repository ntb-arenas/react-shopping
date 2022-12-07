import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

function App() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  console.log(items);

  return (
    <div className="container mx-auto font-poppins">
      <Navbar />
      <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
