import "./App.css";
import React from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody";
import CartContextProvider from "./Store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MainBody />
    </CartContextProvider>
  );
}

export default App;
