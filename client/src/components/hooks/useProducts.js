import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
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

  return [products, error];
};
