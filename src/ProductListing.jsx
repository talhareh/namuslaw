import React, { useEffect, useState } from 'react';
import "./products.css"
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const renderProductCards = () => {
    return( 
      
      products.map((product) => (
      <div key={product.id} className="product-card" onClick={() => onProductClick(product)} >
        <div className="image-container">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          
          <p>Price: ${product.price}</p>
          <Link to={`/product/` + product.id}>View Detail</Link>
        </div>
      </div>
    ))
    
    );
  };

  return (
    <div className="products-page">
      <h1>Products Page</h1>
      <div className="product-container">{renderProductCards()}</div>
    </div>
  );
};

export default ProductListing;
