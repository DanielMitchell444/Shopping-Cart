import React from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = (props) => {
 return(
 <div>
    {props.items.map(item => {
     return <Card 
     items = {item}
     />
    })}  
 </div>
 )
}

export default Cart;