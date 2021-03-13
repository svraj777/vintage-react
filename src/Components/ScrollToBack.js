import React, { useContext } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { CartContext } from "./../context/cart";
export default function ScrollToBack() {
  const { height } = useContext(CartContext);

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button className={height > 100 ? "scroll-btn show-scroll-btn" : "scroll-btn"} onClick={scrollBackToTop}>
        <FaAngleDoubleUp></FaAngleDoubleUp>
      </button>
    </div>
  );
}
