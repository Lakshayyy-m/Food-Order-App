import React, { useContext, useState } from "react";
import cartImg from "../Assets/cart.svg";
import styles from "./CartButton.module.css";
import { CartContext } from "../Store/CartContextProvider";
import Cart from "./Cart";
import { createPortal } from "react-dom";

function CartButton() {
  let content = "";
  const [showCart, setShowCart] = useState(false);
  const ctx = useContext(CartContext);
  const cartShower = () => {
    if (ctx.foodList.length > 0) {
      setShowCart(true);
    }
  };

  if (showCart) {
    content = (
      <div className={styles.backdrop}>
        <Cart />
      </div>
    );
  }

  const counter = ctx.foodList.reduce((sum, currValue) => {
    return (sum += Number(currValue.quantity));
  }, 0);

  return (
    <div className={styles.mainButton} onClick={cartShower}>
      {createPortal(content, document.getElementById("modal"))}
      <img src={cartImg} alt="Cart" className={styles.cartImg} />
      <p className={styles.mainText}> Your Cart</p>
      <div className={styles.counter}>{counter}</div>
    </div>
  );
}

export default CartButton;
