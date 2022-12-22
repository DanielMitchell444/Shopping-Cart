import React, { useState } from "react";
import data from '../Component/data'
import Card from "./Card";
import styles from "../App.module.css";
import Cart from "./Cart";
import App from "../App";
import { json } from "react-router-dom";
let items = []
const Shopping = (props) => {

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
       data-value = {card.id}
       onClick = {props.onClick}
       />
      })}
    </div>
    </div>
    )
}

export default Shopping;