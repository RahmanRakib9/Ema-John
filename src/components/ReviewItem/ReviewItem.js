import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
     const { name, quantity, key, price } = props.pd;
     const removeProduct = props.removeProduct;
     const reviewItemStyle = {
          borderBottom: '1px solid lightgray',
          marginBottom: '5px',
          paddingBottom: '5px',
          marginLeft: '200px'
     }
     return (
          <div style={reviewItemStyle}>
               <h4>{name}</h4>
               <p>quantity {quantity}</p>
               <p><small>$ {price}</small></p>
               <button className='main-btn' onClick={() => removeProduct(key)}>Remove</button>
          </div>
     );
};

export default ReviewItem;