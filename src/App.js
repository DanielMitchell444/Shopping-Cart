import logo from './logo.svg';
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Nav from './Component/Nav';
import Home from './Component/Home';
import Shopping from './Component/Shopping';
import Cart from './Component/Cart';

function App({items}) {
  
  return (
   
    <div className="App">
     <Router>
      <Nav />
      <Routes>
       <Route exact path = "/"  element = {<Home />} />
       <Route exact path = '/shopping' element = {<Shopping 
       />} />
       <Route exact path = "/cart" element ={<Cart
       items = {items}
       />} />
      </Routes>
     </Router>
     </div>
  );
}

export default App;
