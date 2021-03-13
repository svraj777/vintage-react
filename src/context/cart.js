// cart context
import React, { useState } from "react";
import Local from "../utils/Local";
import { useEffect } from "react";

export const CartContext = React.createContext();
function getDataFromStorage() {
  return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}
export default function CartProvider({ children }) {
  const [cart, setCart] = useState(getDataFromStorage());
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener("scroll", () => {});
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const Cartsum = cart.reduce((total, cartItem) => {
      return (total += cartItem.price);
    }, 0);
    setCartItem(Cartsum);
    const TotalSum = cart.reduce((total, singleItem) => {
      return (total += parseInt(singleItem.amount) * parseInt(singleItem.price));
    }, 0);
    setTotal(TotalSum);
    return () => {};
  }, [cart]);

  const IncreaseItem = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item };
    });
    setCart(newCart);
  };
  const DecreaseItem = (id) => {
    const checkAmount = cart.find((item) => item.id === id);
    const { amount } = checkAmount;
    if (amount > 1) {
      const newCart = [...cart].map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item };
      });
      setCart(newCart);
    } else {
      const newCart = [...cart].filter((item) => {
        return item.id != id;
      });
      setCart(newCart);
    }
  };
  const RemoveCartItem = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setCart(newCart);
  };
  const AddToCart = (Product) => {
    const { id, image, price, title, amount } = Product;
    const newCart = [...cart].find((item) => item.id === id);
    if (newCart) {
      IncreaseItem(id);
      return;
    } else {
      const newItem = { id, image, price, title, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <>
      <CartContext.Provider
        value={{ cart, total, cartItem, IncreaseItem, DecreaseItem, RemoveCartItem, clearCart, AddToCart, height }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
