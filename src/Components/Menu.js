import React, { useCallback, useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import styles from "./Menu.module.css";

function Menu() {
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState();
  const [loadingStatus, setLoadingStatus] = useState(false);

  const fetchMeals = useCallback(async () => {
    setLoadingStatus(true);
    try {
      const response = await fetch(
        "https://food-order-app-d3c50-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      const temp = [];

      for (let key in data) {
        temp.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setItemList(temp);
    } catch (error) {
      setLoadingStatus(false);
      setError(new Error(error.message));
    }
    setLoadingStatus(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let content = "";

  if (loadingStatus) {
    content = <p className={styles.tempText}>Fetching Meals.....please wait</p>;
  } else if (error) {
    content = (
      <p className={styles.tempText}>
        Some error occured, try again later, probably the database is taken down
      </p>
    );
  } else {
    content = itemList.map((curr) => {
      return <FoodItem value={curr} key={Math.random()} />;
    });
  }

  //todo: Food list rendering
  return <div className={styles.menuCard}>{content}</div>;
}

export default Menu;
