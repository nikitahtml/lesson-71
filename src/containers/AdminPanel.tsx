import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DishesPage from './DishesPage';
import OrdersPage from './OrdersPage';

const AdminPanel: React.FC = () => {
    return (
        <div className="admin-panel">
            <nav>
                <ul>
                    <li>
                        <Link to="dishes">Блюда</Link>
                    </li>
                    <li>
                        <Link to="orders">Заказы</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="dishes" element={<DishesPage />} />
                <Route path="orders" element={<OrdersPage />} />
            </Routes>
        </div>
    );
};

export default AdminPanel;
