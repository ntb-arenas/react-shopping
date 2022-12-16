import { useState, useEffect } from "react";

const useProductApi = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
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

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setAllProducts((prevData) => [...prevData, { ...values, image: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?", id: prevData.length + 1 }]);
      setSubmitting(false);
    }, 400);
  };

  return {
    allProducts,
    filterProduct,
    filteredProducts,
    handleSubmit,
  };
};

export default useProductApi;
