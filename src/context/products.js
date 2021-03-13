// products context
import axios from "axios";
import React, { useState, useEffect } from "react";
import URL from "../utils/URL";
import { featuredProducts, flattenProducts } from "./../utils/helper";

export const ProductContext = React.createContext();
export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${URL}/products`).then((result) => {
      const featuredData = featuredProducts(result.data);
      const product = flattenProducts(result.data);

      setFeatured(flattenProducts(featuredData));
      setProducts(product);
      setLoading(false);
    });
    return () => {};
  }, []);
  return (
    <div>
      <ProductContext.Provider value={{ loading, products, featured }}>{children}</ProductContext.Provider>
    </div>
  );
}
