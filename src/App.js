import logo from './logo.svg';
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Nav from './Component/Nav';
import { useState } from 'react';
import Home from './Component/Home';
import Shopping from './Component/Shopping';
import data from './Component/data';
import Cart from './Component/Cart';

function App() {
  
  
  let items = [];
  const [cardArray, setCardArray] = useState(data);
  const [cart, setCart] = useState(items);

  const addItem = (e) => {
    

    let value = e.target.dataset.value;

 

    let newArray = data.find(index => index.id === value);


    if(newArray){
      console.log('this works btw');
      items.push(newArray);
       
      console.log(items);
      setCart(newArray);

      console.log(setCardArray)
      console.log(items);
    }
    
  }
  


  return (
   
    <div className="App">
     <Router>
      <Nav />
      <Routes>
       <Route exact path = "/"  element = {<Home />} />
       <Route exact path = '/shopping' element = {<Shopping 
       onClick = {(e) => addItem(e)} 
       items = {items.name}
       />} />
       <Route exact path = "/cart" element ={<Cart
       items = {items}
       onClick = {(e) => addItem(e)}
       />} />
      </Routes>
     </Router>
     </div>
  );
}

export default App;
