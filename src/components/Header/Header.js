import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to='/shop'>Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/orderReviews">order review</Link>
        <Link to="/manageInventory">Manage Inventory</Link>
        <Link to="/login">Log In</Link>
      </div>
    </nav>
  );
};

export default Header;