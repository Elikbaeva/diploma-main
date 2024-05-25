// adminRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import ManageCategories from './ManageCategories';
import ManageProducts from './ManageProducts';
import ManageOrders from './ManageOrders';

const AdminRoutes = () => {
  return (
    <>
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/categories" component={ManageCategories} />
      <Route path="/admin/products" component={ManageProducts} />
      <Route path="/admin/orders" component={ManageOrders} />
      {/* Добавьте другие маршруты для других страниц */}
    </>
  );
};

export default AdminRoutes;
