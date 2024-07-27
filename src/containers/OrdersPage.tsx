import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchOrders, completeOrder } from '../redux/slices/ordersSlice';

const OrdersPage: React.FC = () => {
    const dispatch = useDispatch();
    const { orders, status, error } = useSelector((state: RootState) => state.orders);

    React.useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    const handleCompleteOrder = (id: string) => {
        dispatch(completeOrder(id));
    };

    if (status === 'loading') return <div>Загрузка...</div>;
    if (status === 'failed') return <div>Ошибка: {error}</div>;

    return (
        <div className="orders-page">
            <h2>Заказы</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <div>
                            {Object.entries(order.items).map(([dishId, quantity]) => (
                                <div key={dishId}>{dishId}: {quantity}</div>
                            ))}
                            <div>Общая стоимость: {order.total} сом</div>
                            <button onClick={() => handleCompleteOrder(order.id)}>Завершить заказ</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrdersPage;
