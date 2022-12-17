import React, { useState } from "react";
import data from '../Component/data'
import Card from "./Card";
import styles from "../App.module.css";
import Cart from "./Cart";
let array = []
const Shopping = () => {

  const [cardArray, setCardArray] = useState(data);

  const addItem = (e) => {
   
    let value = e.target.dataset.value;

 

    let newArray = data.find(index => index.id === value);

    if(newArray){
      console.log('this works btw');
      array.push(newArray);
      setCardArray(array)
      console.log(array);
    }
    
  }
  

    return(
    <div className= {styles.content3}>
    <div className = {styles.content2}>
      {data.map((card) => {
       return <Card
       title = {card.name}
       key = {card.id}
       image = {card.image}
       price = {card.price}
       id = {card.id}
       value = {array}
       data-value = {card.id}
       onClick = {(e) => addItem(e)}
       />
      })}  
    </div>
    </div>
    )
}

export default Shopping;