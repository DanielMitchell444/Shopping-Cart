import React from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = ({items}) => {
 return(
 <div>
    {items.map(item => {
     return <Card 
     item = {item}
     />
    })}  
 </div>
 )
}

export default Cart;