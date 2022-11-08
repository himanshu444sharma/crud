import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
import ShopIcon from '@mui/icons-material/Shop';

 const Navbar = () => {
  const navigate = useNavigate()
  return ( 
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div classname="container">
    <NavLink className="navbar-brand" to="/">Himanshu website</NavLink>
   
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto ">
        <li classname="nav-item">
          <NavLink className="nav-link active" to ="/">Log out</NavLink>
        </li>
        <li classname="nav-item">
          <NavLink className="nav-link" to="/About" > <ShopIcon>Store</ShopIcon></NavLink>
        </li>
    
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/Contect" >Contect</NavLink>
        </li> */}
        {/* <NavLink className="nav-link" to="/">
        <Button variant="contained" color="success" >
        Log out 
      </Button>
      </NavLink> */}
      </ul>
      
    </div>
  </div>
</nav> 
    </>
  )
}
export default Navbar;