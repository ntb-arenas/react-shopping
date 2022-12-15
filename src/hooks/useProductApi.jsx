import { useState, useEffect } from "react";

const useProductApi = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const filterProduct = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const updatedList = allProducts.filter((x) => x.category === category);
      setFilteredProducts(updatedList);
    }
  };

  const addNewProduct = (newProduct) => {
    console.log(newProduct);
  };

  return {
    allProducts,
    filterProduct,
    filteredProducts,
    addNewProduct,
  };
};

export default useProductApi;
