import { useState, useEffect } from "react";

const useItemApi = () => {
  const [items, setItem] = useState([]);
  const [resourceType, setResourceType] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${resourceType}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [resourceType]);

  const handleClick = (category) => {
    setResourceType(category);
  };

  return {
    items,
    handleClick,
  };
};

export default useItemApi;
