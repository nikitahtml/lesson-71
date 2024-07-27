import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearCart } from '../redux/slices/cartSlice';
import axiosApi from '../axiosApi';

const CheckoutModal: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleOrder = async () => {
        const orderItems = cartItems.reduce((acc, item) => {
            acc[item.dish.id] = item.quantity;
            return acc;
        }, {} as Record<string, number>);

        const total = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0) + 150;

        await axiosApi.post('/orders.json', { items: orderItems, total });

        dispatch(clearCart());
    };

    return (
        <div className="checkout-modal">
            <h2>Предварительный просмотр заказа</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.dish.id}>
                        <img src={item.dish.image} alt={item.dish.title} />
                        <h3>{item.dish.title}</h3>
                        <p>{item.dish.price} сом x {item.quantity}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handleOrder}>Заказать</button>
            <button>Отмена</button>
        </div>
    );
};

export default CheckoutModal;
