import React from "react";
import { json } from "react-router-dom";
import Card from "./Card";
import Shopping from "./Shopping";

const Cart = (props) => {
 
   const [results, showResults] = ('')

 return(
 <div>
    {props.items.map(card => {
     return <Card 
     title = {card.name}
     image = {card.image}
     price = {card.price}
     key = {card.id}
     onClick = {card.removeItem}
     
     
     />
    })} 
 </div>
 )
}

export default Cart;