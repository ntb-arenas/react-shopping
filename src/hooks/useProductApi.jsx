import { useState, useEffect } from "react";

const useProductApi = () => {
  const [data, setItem] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setProducts(data);
      });
  }, []);

  const filterProduct = (category) => {
    if (category === "all") {
      setProducts(data);
    } else {
      const updatedList = data.filter((x) => x.category === category);
      setProducts(updatedList);
    }
  };

  return {
    data,
    filterProduct,
    products,
  };
};

export default useProductApi;
