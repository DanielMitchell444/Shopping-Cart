import React from "react";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = ({item}) => {
 return(
 <div>
  <Card 
  item = {item}
  />
 </div>
 )
}

export default Cart;