import React from "react";
import Home from "../Home/Home";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useProductApi from "../../hooks/useProductApi";

function App() {
  const { data } = useProductApi([]);

  return <React.Fragment>{data.length === 0 ? <LoadingSpinner /> : <Home />}</React.Fragment>;
}

export default App;
