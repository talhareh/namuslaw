import React, { useEffect, useState } from 'react';
import "./products.css"
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/'+id);
        const data = await response.json();
        setProduct(state => ({
          ...state, 
          ...data
        }));
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="products-page pg-single" >
      <h1>Product Detail Page</h1>
      {product  && product.id && 
        <div className="product-detail-single">
          <div className="image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <div className="metainfo">
              <small><b>Category:</b> {product.category}</small>
              <small><b>Ratting:</b> {product.rating.rate}</small>
              <small><b>Total Review:</b> {product.rating.count}</small>
            </div>
            <p>{product.description}</p>
            
            <p>Price: ${product.price}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetail;
