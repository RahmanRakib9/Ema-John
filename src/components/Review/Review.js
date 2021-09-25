import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import './Review.css';
import ReviewItem from '../ReviewItem/ReviewItem'
import Cart from '../Cart/Cart';
import giphy from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
     const [cart, setCart] = useState([]);
     const [orderPlaced, setOrderPlaced] = useState(false);

     const removeProduct = (productKey) => {
          const newCart = cart.filter(pd => pd.key !== productKey);
          setCart(newCart);
          removeFromDatabaseCart(productKey);
     }

     const history = useHistory();
     const handleProceedCheckOut = () => {
          history.push('/shipment');
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

     let displayImage;
     if (orderPlaced) {
          displayImage = <img src={giphy} alt="" />
     }

     return (
          <div className='twin-container'>
               <div className='product-container'>
                    {
                         cart.map(pd => <ReviewItem pd={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                    }
                    {displayImage}
               </div>
               <div className='cart-container'>
                    <Cart cart={cart}>
                         <button className='main-btn' onClick={handleProceedCheckOut}>Proceed CheckOut</button>
                    </Cart>
               </div>
          </div>
     );
};

export default Review;