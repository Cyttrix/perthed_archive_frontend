import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { Button } from "@mui/material";
import NavBarIcon from "../../assets/PA_Logo.png";



const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  
  
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "rgb(42, 235, 170)" }}>
            <img src={NavBarIcon} width={100} height={60} />
          </Link>
          
        </li>
       
        
        <li className="centerbrand">
        <Button 
        varient="text" 
        onClick={(e) => {
          e.preventDefault();
          window.location.href="http://localhost:3001/"
        }}
        >Home</Button>

          <Button 
          varient="text" 
          onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3001/browse';
          }}
          >Browse</Button>

          <Button 
          varient="text"
          onClick={(e) => {
            e.preventDefault();
            window.location.href='http://localhost:3001/movielist'
          }}
          >Movie List</Button>

          <Button 
          varient="text"
          onClick={(e) => {
            e.preventDefault();
            window.location.href=`http://localhost:3001/${user.userName}`
          }}
          >Profile</Button>
        </li>
        
        <li className="brand">
          {user ? (
            <Button variant="text" onClick={logoutUser}>Logout</Button>
          ) : (
            <Button varient="text" onClick={() => navigate("/login")}>Login</Button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
