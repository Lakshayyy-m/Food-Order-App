import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../Store/CartContextProvider";

const Cart = () => {
  const ctx = useContext(CartContext);

  const cartTotal = ctx.foodList.reduce((sum, currValue) => {
    return (sum += currValue.price * currValue.quantity);
  }, 0);

  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Your Cart</h1>
      {ctx.foodList.map((currValue) => {
        return (
          <div className={styles.item}>
            <div className={styles.left}>
              <h2 className={styles.name}>{currValue.name}</h2>
              <span className={styles.price}>
                ${currValue.price * currValue.quantity}
              </span>
              <span className={styles.quantity}>x{currValue.quantity}</span>
            </div>
            <div className={styles.right}>
              <button className={`${styles.decrement} ${styles.button}`}>
                -
              </button>
              <button className={`${styles.increment} ${styles.button}`}>
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className={styles.total}>
        <h1>Total</h1>
        <h1>${cartTotal.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
