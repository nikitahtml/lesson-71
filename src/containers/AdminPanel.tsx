import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DishesPage from './DishesPage';
import OrdersPage from './OrdersPage';

const AdminPanel: React.FC = () => {
    return (
        <div className="admin-panel">
            <Routes>
                <Route path="dishes" element={<DishesPage />} />
                <Route path="orders" element={<OrdersPage />} />
            </Routes>
        </div>
    );
};

export default AdminPanel;
