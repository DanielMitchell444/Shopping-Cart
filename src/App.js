import logo from './logo.svg';
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Nav from './Component/Nav';
import { useState } from 'react';
import Home from './Component/Home';
import Shopping from './Component/Shopping';
import data from './Component/data';
import Cart from './Component/Cart';
import Card from './Component/Card';
import CartItems from './Component/CartItems';

function App() {
  
  
  const [cardArray, setCardArray] = useState(data);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const addItem = (product) => {
    

    let list = [...cart];

    let newArray = data.filter((index => index.id === product));



    if(newArray){
      console.log('this works btw');


     setCart([...cart, product])

     setCount(count + 1);

      console.log(setCart)
    }
    
  }

  const removeItem = (product) => {
   
  
   setCart(cart.filter(a => a.id !== product.id))
   console.log('this works');;
}

const addTotal = () => {
  let initialValue = 0;
  const total = data.reduce((accumulator, current) => accumulator + current.price + current.price, initialValue);

  setTotal(total) 
}


const incrementNumber = () => {
    setCount((count) => count + 1 )
  }
  
  const decrementNumber = () => {
    setCount(count - 1); 
  }


    




  return (
   
    <div className="App">
     <Router>
      <Nav />
      <Routes>
       <Route exact path = "/"  element = {<Home />} />
       <Route exact path = '/shopping' element = {<Shopping 
       addItem = {addItem} 
       removeItem = {removeItem}
       items = {cart}
       />} />
       <Route exact path = "/cart" element ={<Cart
       items = {cart}
       addItem = {addItem}
       removeItem = {removeItem}
       quantity = {count}
       total = {addTotal}
       />} />
       <Route exact path = "/cart" element = {<CartItems 
       removeItem = {removeItem}
       total = {total}

       />}
          
       />
      </Routes>
     </Router>
     </div>
  );
}

export default App;
