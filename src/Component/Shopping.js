import React, { useState } from "react";
import data from '../Component/data'
import Card from "./Card";
import styles from "../App.module.css";
import Cart from "./Cart";
let items = []
const Shopping = () => {

  const [cardArray, setCardArray] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (e) => {
   
    let value = e.target.dataset.value;

 

    let newArray = data.find(index => index.id === value);

    if(newArray){
      console.log('this works btw');
      items.push(newArray);
      setCardArray(newArray);

      console.log(setCardArray)
      console.log(items);
    }
    
  }
  

    return(
    <div className= {styles.content3}>
    <div className = {styles.content2}>
      {data.map((card) => {
       return <Card
       title = {card.name}
       items = {items}
       key = {card.id}
       image = {card.image}
       price = {card.price}
       id = {card.id}
       value = {items}
       data-value = {card.id}
       onClick = {(e) => addItem(e)}
       />
      })}  
    </div>
    </div>
    )
}

export default Shopping;