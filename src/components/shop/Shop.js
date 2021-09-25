import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [searchProduct, setSearchProduct] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setSearchProduct(data)
            })
    }, [])


    useEffect(() => {
        const savedCart = getStoredCart()

        const storedCart = []
        if (products.length) {
            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key)

                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }

            }
        }
        setCart(storedCart);

    }, [products])

    const handleSearch = (event) => {
        const searchedText = event.target.value;
        const searchProduct = products.filter(product => product.name.toLowerCase().includes(searchedText))
        setSearchProduct(searchProduct);

    }

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.key)
    }

    return (
        <>
            <div className='search-container'>
                <input type="text" placeholder='Search Product' onChange={handleSearch} />
            </div>
            <div className='products'>
                <div >
                    <h2>Total Products {products.length}</h2>
                    {
                        searchProduct.map(product => <Product key={product.key} handleAddToCart={handleAddToCart} product={product}></Product>)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>

    );
};

export default Shop;