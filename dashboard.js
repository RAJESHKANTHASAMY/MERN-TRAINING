// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍 Product Page</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            textAlign: 'center',
            background: '#fafafa'
          }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '120px', objectFit: 'contain' }} />
            <h4 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h4>
            <p style={{ fontWeight: 'bold' }}>₹{(product.price * 80).toFixed(2)}</p>
            <p style={{ fontSize: '14px', color: '#555' }}>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;