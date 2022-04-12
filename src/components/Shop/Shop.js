import React from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../hook/useCart";
import useProducts from '../hook/useProducts';
import Product from "../Product/Product";
import "./Shop.css";


const Shop = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart([products]);
  
  

  const addToCard = (products) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === products.id);
    if (!exists) {
      products.quantity = 1;
      newCart = [...cart, products];
    } else {
      const rest = cart.filter((product) => product.id !== products.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest,exists];
    }
    setCart(newCart);
    addToDb(products.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            addToCard={addToCard}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="products-summery">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
