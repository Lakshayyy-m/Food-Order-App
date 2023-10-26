import React, { useState } from "react";

export const CartContext = React.createContext({});

const CartContextProvider = (props) => {
  const [foodList, setFoodList] = useState([]);

  const addItem = (item) => {
    let flag = false;
    let ind;
    foodList.map((currValue, index) => {
      if (currValue.name === item.name) {
        flag = true;
        ind = index;
      }
      return 0;
    });

    if (!flag) {
      setFoodList((prev) => {
        return [...prev, item];
      });
    } else {
      console.log(foodList[ind]);
      foodList[ind].quantity += Number(item.quantity);
      setFoodList([...foodList]);
    }
  };

  const increment = (index) => {
    foodList[index].quantity++;
    setFoodList([...foodList]);
  };

  const decrement = (index) => {
    if (foodList[index].quantity > 1) {
      foodList[index].quantity--;
      setFoodList([...foodList]);
    } else {
      foodList.splice(index, 1);
      setFoodList([...foodList]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        foodList: foodList,
        add: addItem,
        increment: increment,
        decrement: decrement,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
