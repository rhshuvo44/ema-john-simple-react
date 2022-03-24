import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    totalPrice += product.price * product.quantity;
    shipping += product.shipping;
  }

  const tax = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = totalPrice + shipping + tax;
  return (
    <div className="cart">
      <h3 className="title">Order Summary</h3>
      <div className="order-summary">
        <p>Selected Items:{quantity}</p>
        <p>Total Price:${totalPrice}</p>
        <p>Shipping Charge:${shipping}</p>
        <p>Tax:${tax}</p>
        <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Cart;
