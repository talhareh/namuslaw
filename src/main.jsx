import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import ProductListing from './ProductListing'
import ProductDetail from './ProductDetail'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

