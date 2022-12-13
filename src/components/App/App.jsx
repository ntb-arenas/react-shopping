import React from "react";
import Home from "../Home/Home";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useProductApi from "../../hooks/useProductApi";

function App() {
  const { allProducts } = useProductApi([]);

  return <div>{allProducts.length === 0 ? <LoadingSpinner /> : <Home />}</div>;
}

export default App;
