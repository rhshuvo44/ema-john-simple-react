import React from 'react';
import useCart from '../hook/useCart';
import useProducts from '../hook/useProducts';

const Orders = () => {
    const [products]=useProducts();
    const [cart]=useCart(products);
    return (
        <div>
            <h1>Orders</h1>
            <p>{products.length}</p>
            <p>{cart.length}</p>
        </div>
    );
};

export default Orders;