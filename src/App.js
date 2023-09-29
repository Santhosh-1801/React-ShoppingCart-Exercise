import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart"; 
import "../src/App.css"
import { useState } from "react";
import Carts from "./Cart";

function App() {


  return (
  <BrowserRouter>
    <Header/> 
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shoppingcart" element={<Carts/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;
