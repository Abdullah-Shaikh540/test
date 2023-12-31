import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // Get only the first 20 products
        const limitedData = data.slice(0, 20);
        setProducts(limitedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

