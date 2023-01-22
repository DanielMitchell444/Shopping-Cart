import React from "react";
import { Link } from "react-router-dom";
import styles from '../App.module.css'

const Nav = () => {
 return(
 <nav>
  <h3>Shopping Site</h3>
 <div className= {styles.list}>
<li className= {styles.list}>
  <Link to = "/">Home</Link>
</li>
<li className= {styles.list}>
<Link to = "/shopping">Shopping</Link>
</li>
<li className= {styles.list}>
 <Link to = "/cart">Cart</Link>
</li>
 </div>
 </nav>
 )
}

export default Nav;