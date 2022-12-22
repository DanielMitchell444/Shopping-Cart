import React from "react";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = ({items}) => {
 return(
 <div>
  <h2>{JSON.stringify(items)}</h2>
  <h3>{items.name}</h3>
 </div>
 )
}

export default Cart;