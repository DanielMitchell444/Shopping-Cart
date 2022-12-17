import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 return(
 <nav>
 <div>
<li>
  <Link to = "/">Home</Link>
</li>
<li>
<Link to = "/shopping">Shopping</Link>
</li>
<li>
 <Link to = "/cart">Cart</Link>
</li>
 </div>
 </nav>
 )
}

export default Nav;