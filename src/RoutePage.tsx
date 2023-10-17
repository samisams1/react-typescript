import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const RoutePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/product" element={<h1>Product Page</h1>} />
      </Routes>
    </Router>
  );
};

export default RoutePage;