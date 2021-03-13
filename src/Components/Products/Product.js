import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <article className='product'>
      <div className='img-container'>
        <img src={product.image} alt='' />
        <Link to={`products/${product.id}`} className='btn btn-primary product-link'>
          details
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{product.title}</p>
        <p className='product-price'>{product.price}</p>
      </div>
    </article>
  );
}
