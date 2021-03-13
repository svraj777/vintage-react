import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import Loading from "../Components/Loading";
import ProductList from "./../Components/Products/ProductList";
export default function Products() {
  const { products, loading } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
