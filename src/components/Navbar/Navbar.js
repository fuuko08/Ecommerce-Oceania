import React from "react";
import logo from '../../img/logo/logo.png';
import Searchbar from "./Searchbar";
import { NavLink, Link } from "react-router-dom";
import {
    AiOutlineUser,
    AiFillHome,
    AiOutlineShoppingCart,
  } from "react-icons/ai";
import './Navbar.css';

 
const Navbar = () => {  
  const menu = [
    { url: '/Ecommerce-Oceania', lName: `Home` },
    { url: '/shop', lName: 'Shop' },
    { url: '/blog', lName: 'Blog' },
    { url: '/about', lName: 'About us' },
    { url: '/contact', lName: 'Contact' },
  ];
  const activeLi = {
    color: "#61ce70",
  };
   
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNav">
            <div className="container">
                <img className="navbar-brand" href="#page-top" src={logo} id="navLogo" alt="logo"/>
                <button className="navbar-toggler text-uppercase rounded" style={{backgroundColor: "var(--skinny)", color: "#007ea7"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse optionsBox" id="navbarResponsive">
                    <ul className="navbarOptions">
                    {menu.map((item, index) =>
                        <li className="nav-item mx-0 mx-lg-1" key={index} >
                            <NavLink
                            to={item.url}
                            style={({ isActive }) => isActive ? activeLi : undefined}>
                            {index === 0 ? <AiFillHome style={{ marginRight: "5px" }} /> : ""}
                            {item.lName}
                            </NavLink>
                        </li>
                        )}
                    </ul>
                    <ul className="extraOption">
                        <li><Searchbar /></li>
                        <li><Link><AiOutlineShoppingCart /></Link></li>                   
                        <AiOutlineUser />                     
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;