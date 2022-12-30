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

function App() {
  
  
  const [cardArray, setCardArray] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (product) => {
    

    let list = [...cart];

    let newArray = data.findIndex((index => index.id === product));



    if(newArray){
      console.log('this works btw');


     setCart([...cart, product])

      console.log(setCart)
    }
    
  }
  


  return (
   
    <div className="App">
     <Router>
      <Nav />
      <Routes>
       <Route exact path = "/"  element = {<Home />} />
       <Route exact path = '/shopping' element = {<Shopping 
       addItem = {addItem} 
       items = {cart}
       />} />
       <Route exact path = "/cart" element ={<Cart
       items = {cart}
       addItem = {addItem}
       />} />
      </Routes>
     </Router>
     </div>
  );
}

export default App;
