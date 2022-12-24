import React from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = (props) => {
 return(
 <div>
   {Object.entries(props.items).map(items => {
    return <Card 
    title = {items}
    />
   })}  
 </div>
 )
}

export default Cart;