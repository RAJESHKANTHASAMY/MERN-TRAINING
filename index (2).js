import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use 'react-dom/client' in React 18+
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ✅ React 18 way of rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
