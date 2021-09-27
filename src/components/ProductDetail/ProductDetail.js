import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
     const { productKey } = useParams();
     const product = fakeData.find(pd => pd.key === productKey);
     const [loading, setLoading] = useState(false);
     document.title='Product Details'
     return (
          <div>
               <h1>Your Product Details</h1>
               {
                    loading ? <p style={{ color: 'red' }}>loading...</p> : <Product product={product} showAddToCart={false}></Product>
               }
               <Link to='/'><button className='main-btn'>Home</button></Link>
          </div>
     );
};

export default ProductDetail;