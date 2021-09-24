import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem'

const Review = () => {
     const [cart, setCart] = useState([]);

     const removeProduct = (productKey) => {
          const newCart = cart.filter(pd => pd.key !== productKey);
          setCart(newCart);
          removeFromDatabaseCart(productKey);
     }

     useEffect(() => {
          //load cart data
          const savedCard = getDatabaseCart();
          const productKeys = Object.keys(savedCard);

          const cartProducts = productKeys.map(key => {
               const product = fakeData.find(pd => pd.key === key);
               product.quantity = savedCard[key];
               return product;
          });
          setCart(cartProducts);
     }, [])

     return (
          <div>
               <h1>Card Items: {cart.length} </h1>
               {
                    cart.map(pd => <ReviewItem pd={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
               }
          </div>
     );
};

export default Review;