import React from "react";
import { CartContext } from "./../../context/cart";
import { useHistory } from "react-router-dom";

export default function CartLink({ CartData }) {
  let history = useHistory();

  const { RemoveCartItem, IncreaseItem, DecreaseItem } = React.useContext(CartContext);

  const { id, amount, image, price, title } = CartData;
  return (
    <>
      <article className='cart-item'>
        <img src={image} alt='' />
        <div>
          <h4>{title}</h4>
          <h5>{price}</h5>
          <button
            type='button'
            className='cart-btn remove-btn'
            onClick={() => {
              RemoveCartItem(id);
            }}>
            remove
          </button>
        </div>
        <div>
          <button
            type='button'
            className='cart-btn amount-btn'
            onClick={() => {
              IncreaseItem(id);
            }}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 320 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z'></path>
            </svg>
          </button>
          <p className='item-amount'>{amount}</p>
          <button
            type='button'
            className='cart-btn amount-btn'
            onClick={() => {
              DecreaseItem(id);
            }}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 320 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'></path>
            </svg>
          </button>
        </div>
      </article>
    </>
  );
}
