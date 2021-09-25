import React from 'react';
import Rating from 'react-rating';
import './product.css'

const Product = (props) => {

    const { img, name, seller, stock, price, star } = props.product
    return (
        <div className="product">
            <div>
                <img className='product-img' src={img} alt='' />
            </div>
            <div>
                <h3 className='product-title'>{name}</h3>
                <h4>by: {seller}</h4>
                <h3>${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                    emptySymbol="far fa-star star-icon"
                    fullSymbol="fas fa-star star-icon"
                    initialRating={star}
                ></Rating>
                <br />
                <button className='buy-now-btn' onClick={() => props.handleAddToCart(props.product)}>Buy now</button>
            </div>
        </div>
    );
};

export default Product;