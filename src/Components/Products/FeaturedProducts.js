import React, { useContext } from "react";
import Loading from "./../Loading";
import { ProductContext } from "./../../context/products";
import ProductList from "./ProductList";

export default function FeaturedProducts() {
  const { featured, loading } = useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return <ProductList title='Featured Products' products={featured} />;
}
