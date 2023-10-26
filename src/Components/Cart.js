import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../Store/CartContextProvider";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const increment = (index) => {
    ctx.increment(index);
  };

  const decrement = (index) => {
    ctx.decrement(index);
  };

  const cartTotal = ctx.foodList.reduce((sum, currValue) => {
    return (sum += currValue.price * currValue.quantity);
  }, 0);

  return (
    <div className={styles.cart}>
      <h1 className={styles.heading}>Your Cart</h1>
      {ctx.foodList.map((currValue, index) => {
        return (
          <div className={styles.item}>
            <div className={styles.left}>
              <h2 className={styles.name}>{currValue.name}</h2>
              <span className={styles.price}>
                ${(currValue.price * currValue.quantity).toFixed(2)}
              </span>
              <span className={styles.quantity}>x{currValue.quantity}</span>
            </div>
            <div className={styles.right}>
              <button
                className={`${styles.decrement} ${styles.button}`}
                onClick={() => {
                  decrement(index);
                }}
              >
                -
              </button>
              <button
                className={`${styles.increment} ${styles.button}`}
                onClick={() => {
                  increment(index);
                }}
              >
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
