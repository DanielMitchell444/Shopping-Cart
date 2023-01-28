import React from "react";
import { Link } from "react-router-dom";
import styles from '../App.module.css'

const Nav = () => {
 return(
 <nav>
 <div className= {styles.list}>
<li className= {styles.list}>
  <Link className= {styles.list} to = "/">Home</Link>
</li>
<li className= {styles.list}>
<Link className= {styles.list} to = "/shopping">Shopping</Link>
</li>
<li className= {styles.list}>
 <Link className= {styles.list} to = "/cart">Cart</Link>
</li>
 </div>
 </nav>
 )
}

export default Nav;