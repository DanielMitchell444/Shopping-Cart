import React from "react";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = (props) => {
 return(
 <div>
   <Card 
   onClick = {props.onClick}
   />
 </div>
 )
}

export default Cart;