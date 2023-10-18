import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopeProduct } from './pages/product/shope/shopeProduct';
import Store from './pages/store/Store';
import Sales from './pages/sale/Sales';
import Produuct from './pages/product/shope/product';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard';
import { Category } from './pages/category/Category';
import { Order } from './pages/order';
import { User } from './pages/user/User';


const RoutePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/product" element={<Produuct />} />

        <Route path="/order" element={<Order />} />

        <Route path="/request" element={<ShopeProduct />} />

        <Route path="/category" element={<Category />} />

        <Route path="/shope" element={<ShopeProduct />} />

        <Route path="/sale" element={<ShopeProduct />} />

        <Route path="/user" element={<User />} />

        <Route path="/sales" element={<Sales />} />

        <Route path="/store" element={<Store />} />

        <Route path="/requestHistory" element={<ShopeProduct />} />

        <Route path="/attachment" element={<ShopeProduct />} />
        
        <Route path="/profile" element={<ShopeProduct />} />

        <Route path="/report" element={<ShopeProduct />} />
        
        <Route path="/setting" element={<ShopeProduct />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default RoutePage;