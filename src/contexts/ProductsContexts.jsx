import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [pruducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/data"); // Replace with your API endpoint
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <DataContext.Provider value={{ pruducts, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
