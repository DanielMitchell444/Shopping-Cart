import React from "react";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = ({items}) => {
 return(
 <div>
  {items.map(item => {
  return <Card 
  items = {item}
  />  
  })}
 </div>
 )
}

export default Cart;