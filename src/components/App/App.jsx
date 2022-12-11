import React from "react";
import Home from "../Home/Home";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useProductApi from "../../hooks/useProductApi";

function App() {
  const { allProducts } = useProductApi([]);

  return <React.Fragment>{allProducts.length === 0 ? <LoadingSpinner /> : <Home />}</React.Fragment>;
}

export default App;
