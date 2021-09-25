import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    // const totalReducer = (previous, product) => previous + product.price
    // const total = cart.reduce(totalReducer, 0)

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = (total + product.price) * product.quantity
        totalQuantity = totalQuantity + product.quantity
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) / 10
    const grandTotal = total + tax + shipping

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Item Ordered: {totalQuantity} </h4>
            <h4>Total: {total.toFixed(2)} </h4>
            <h4>Shipping: {shipping}</h4>
            <h4>Tax: {tax.toFixed(2)}</h4>
            <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;