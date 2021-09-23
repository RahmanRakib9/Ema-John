import React from 'react';

const ReviewItem = (props) => {
     const { name, quantity } = props.pd;
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
               <button className='main-btn'>Remove</button>
          </div>
     );
};

export default ReviewItem;