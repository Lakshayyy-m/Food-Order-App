import React from "react";
import CartButton from "./CartButton";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.main}>
      <h1>ReactMeals</h1>
      <CartButton />
    </div>
  );
}

export default Header;
