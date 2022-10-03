import React from "react";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`
import { Link } from "react-router-dom";

const links=[
  {path:"/",title:"Home"},
  {path:"/login",title:"Login"},
  {path:"/cart",title:"Cart"},
]

const Navbar = () => {
  return <div style={{display:"flex", justifyContent:"flex-end",backgroundColor:"pink"}}>
       {links.map((link)=>(
          <div style={{margin:"10px", color:"black",fontSize:"18px"}}>
           <Link key={link.path} to={link.path}>{link.title}</Link>
         </div>

       ))}
  </div>;
};

export default Navbar;
