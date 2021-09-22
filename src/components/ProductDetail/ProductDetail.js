import React from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
     const { productKey } = useParams();
     return (
          <div>
               <h1>This is Product Details of {productKey}!</h1>
          </div>
     );
};

export default ProductDetail;