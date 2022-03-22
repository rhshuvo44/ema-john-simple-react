import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCard=()=>{

    }
  return (
    <div className="shop-container">
      <div className="products-container">
          {
              products.map(product => <Product addToCard={addToCard} product={product}></Product> )
          }
      </div>
      <div className="products-summery">
          <h3 className="title">Order Summary</h3>
          <div className="order-summary">
            <p>Selected Items:</p>
            <p>Total Price:</p>
            <p>Total Shipping Charge:</p>
            <p>Tax:</p>
            <h4>Grand Total:</h4>
          </div>

      </div>
    </div>
  );
};

export default Shop;
