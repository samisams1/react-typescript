import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ShopeProduct } from './pages/product/shope/shopeProduct';
const RoutePage: React.FC = () => {
  return (
    <Router>
    <Routes>

      <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/product" element={<ShopeProduct />} />
    </Routes>
  </Router>
  );
};

export default RoutePage;