import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "./../context/products";
import Loading from "./../Components/Loading";
import { CartContext } from "./../context/cart";
import { useHistory } from "react-router-dom";
export default function ProductDetails() {
  let history = useHistory();
  const { id } = useParams();
  const context = React.useContext(ProductContext);
  const { AddToCart } = React.useContext(CartContext);
  const allProducts = context.products;
  const singleProduct = allProducts.find((item) => item.id === parseInt(id));

  if (allProducts.length === 0) {
    return <Loading />;
  } else {
    const { title, description, free_shipping, price, image } = singleProduct;
    console.log(singleProduct);
    return (
      <>
        <section className='single-product'>
          <img src={image} alt='' className='single-product-image' />
          <article>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <span>{free_shipping}</span>
          </article>
          <button
            className='btn btn-primary btn-block'
            onClick={() => {
              history.push("/Cart");
              AddToCart(singleProduct);
            }}>
            add to cart
          </button>
        </section>
      </>
    );
  }
}
