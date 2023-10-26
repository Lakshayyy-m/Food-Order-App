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

  return (
    <CartContext.Provider value={{ foodList: foodList, add: addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
