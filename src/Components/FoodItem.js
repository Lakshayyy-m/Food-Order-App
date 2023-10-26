import React, { useContext, useRef } from "react";
import styles from "./FoodItem.module.css";
import { CartContext } from "../Store/CartContextProvider";

function FoodItem(props) {
  const ctx = useContext(CartContext);

  const inputRef = useRef();

  const addItem = () => {
    const finalObject = {
      ...props.value,
      quantity: Number(inputRef.current.value),
    };
    ctx.add(finalObject);
  };
//!counter update ni ho raha on adding item, fix that!
  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.name}>{props.value.name}</h1>
        <p className={styles.desc}>{props.value.description}</p>
        <p className={styles.price}>${props.value.price}</p>
      </div>
      <div className={styles.right}>
        <div className={styles.upper}>
          <p>Quantity</p>
          <input type="number" defaultValue={0} min={0} ref={inputRef} />
        </div>
        <button onClick={addItem}>+Add</button>
      </div>
    </div>
  );
}

export default FoodItem;
