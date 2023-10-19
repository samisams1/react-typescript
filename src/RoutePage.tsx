import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import LogoOnlyLayout from './layoutes/LogoOnlyLayout';
import ForgotPassword from './pages/account/ForgotPassword';
import Request from "./pages/Request";
import Dashboard from './pages/dashboard';
import { Report } from './pages/report/Report';
import { RequestHistory } from './pages/Request/RequestHistory';
import ProtectedRoute from './auth/ProtectedRoute';
import { Product } from './pages/product/shope/Product';
import { Order } from './pages/order';
import { Category } from './pages/category/Category';
import { ShopeProduct } from './pages/product/shope/ShopeProduct';
import Sale from './pages/sale';
import Setting from './pages/setting/Setting';
import { Profile } from './pages/profile/Profile';
import { Sales } from './pages/sale/Sales';
import { Store } from './components/pageComponents/store';
import Login from './pages/login/Login';
import NotFoundPage from './pages/NotFoundPage';
import DashboardLayout from './layoutes/DashboardLayout';
export default function RoutePage() {

    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
              { path: '/', element: <ProtectedRoute  element={<Dashboard />} /> },
              { path: '/product', element: <ProtectedRoute  element={<Product />} /> },
              { path: '/order', element: <ProtectedRoute  element={<Order />} /> },
              { path: '/request', element: <ProtectedRoute element={<Request />} /> },
              { path: '/category', element: <ProtectedRoute element={<Category />} /> },
              { path: '/shope', element: <ProtectedRoute  element={<ShopeProduct />} /> },
              { path: '/sale', element: <ProtectedRoute  element={<Sale />} /> },
             // { path: '/user', element: <ProtectedRoute  element={< />} /> },
              { path: '/store', element: <ProtectedRoute  element={<Store />} /> },
              { path: '/sales', element: <ProtectedRoute element={<Sales />} /> },
              { path: '/requestHistory', element: <ProtectedRoute element={<RequestHistory />} /> },
              { path: '/profile', element: <ProtectedRoute  element={<Profile />} /> },
              { path: '/report', element: <ProtectedRoute element={<Report />} /> },
              { path: '/setting', element: <ProtectedRoute  element={<Setting />} /> },

      
            ],
          },
          {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
              { path: '/', element: <Navigate to="/dashboard" /> },
              { path: 'login', element: <Login/> },
              { path:  'forgotPassword', element:<ForgotPassword />},
            ],
          },
          { path: '*', element: <NotFoundPage /> },

    ]);
}

