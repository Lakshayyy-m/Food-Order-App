import React from "react";
import FoodItem from "./FoodItem";
import styles from "./Menu.module.css";

function Menu() {
  const itemList = [
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      name: "Green Bowl",
      description: "Healthy....and green",
      price: 18.99,
    },
  ];
  //todo: Food list rendering
  return (
    <div className={styles.menuCard}>
      {itemList.map((curr) => {
        return <FoodItem value={curr} key={Math.random()}  />;
      })}
    </div>
  );
}

export default Menu;
