import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(async () => {
    try {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    } catch (err) {
      setError("Couldn't fetch products.");
    }
  }, []);

  const renderProductList = () => {
    if (!products) {
      return <p>Loading...</p>;
    }
    return <ProductList products={products} />;
  };

  return (
    <div className="products-page">
      <h1>Products</h1>
      {error ? <p>{error}</p> : null}
      {renderProductList()}
    </div>
  );
};

export default ProductsPage;
