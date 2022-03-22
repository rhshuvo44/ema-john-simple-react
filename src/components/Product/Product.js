import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="price">Price : ${price}</p>
        <p className="seller">Manufacturer :{seller}</p>
        <small>Rating :{ratings} star</small>
      </div>
      <button onClick={()=>props.addToCard(props.product)} className="btn-cart">
        <p>Add to Cart <span><FontAwesomeIcon icon={faCartPlus} /></span></p>
      </button>
    </div>
  );
};

export default Product;
