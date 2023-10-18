import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard';
import { Category } from './pages/category/Category';
import { Order } from './pages/order';
import { User } from './pages/user/User';
import { Store } from './pages/store/Store';
import Sale from './pages/sale';
import Setting from './pages/setting/Setting';
import Request from './pages/Request';
import { Profile } from './pages/profile/Profile';
import { ShopeProductList } from './components/pageComponents/shope/shopeProductList';
import { Product } from './pages/product/shope/Product';
import { RequestHistory } from './pages/Request/RequestHistory';

const RoutePage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />

        <Route path="/product" element={<Product />} />

        <Route path="/order" element={<Order />} />

        <Route path="/request" element={<Request />} />

        <Route path="/category" element={<Category />} />

        <Route path="/shope" element={<ShopeProductList />} />

        <Route path="/sale" element={<Order />} />

        <Route path="/user" element={<User />} />

        <Route path="/sales" element={<Sale />} />

        <Route path="/store" element={<Store />} />

        <Route path="/requestHistory" element={<RequestHistory />} />
        
        <Route path="/attachment" element={<Order />} />
        
        <Route path="/profile" element={<Profile />} />

        <Route path="/report" element={<Order />} />
        
        <Route path="/setting" element={<Setting />} />

        <Route path="/change" element={<Setting />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
};

export default RoutePage;