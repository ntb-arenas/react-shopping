import React from "react";
import Home from "../Home/Home";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useProductApi from "../../hooks/useProductApi";

function App() {
  const { allProducts } = useProductApi([]);
  // test github
  return <main>{allProducts.length === 0 ? <LoadingSpinner /> : <Home />}</main>;
}

export default App;
