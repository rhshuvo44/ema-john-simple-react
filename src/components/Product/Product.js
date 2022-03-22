import React from "react";
import "./Product.css";

const Product = (props) => {
  const {addToCard}=props.addToCard;
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="price">Price : ${price}</p>
        <p className="seller">Manufacturer :{seller}</p>
        <small >Rating :{ratings} star</small>
      </div>
      <button onClick={addToCard} className="btn-cart">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
