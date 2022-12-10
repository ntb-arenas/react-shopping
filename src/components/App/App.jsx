import React from "react";
import Home from "../Home/Home";
import Loading from "../Loading/Loading";
import useProductApi from "../../hooks/useProductApi";

function App() {
  const { data } = useProductApi([]);

  return <React.Fragment>{data.length === 0 ? <Loading /> : <Home />}</React.Fragment>;
}

export default App;
