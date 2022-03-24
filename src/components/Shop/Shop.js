import React, { useEffect, useState } from "react";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storeCart = getStoreCart();
    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

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
