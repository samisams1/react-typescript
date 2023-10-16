import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { ShopeProduct } from './pages/product/shope/shopeProduct';
const RoutePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ShopeProduct />} />
      </Routes>
    </Router>
  );
};

export default RoutePage;