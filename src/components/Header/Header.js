import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/Order">Order</a>
        <a href="/OrderReview">order review</a>
        <a href="/ManageInventory">Manage Inventory</a>
      </div>
    </nav>
  );
};

export default Header;