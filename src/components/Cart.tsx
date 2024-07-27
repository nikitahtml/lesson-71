import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    if (!cartItems || (Array.isArray(cartItems) && cartItems.length === 0) || (typeof cartItems === 'object' && Object.keys(cartItems).length === 0)) {
        return <p>Ваша корзина пуста</p>;
    }

    return (
        <div>
            <h2>Корзина</h2>
            <ul>
                {Object.entries(cartItems).map(([id, { title, quantity, price }]) => (
                    <li key={id}>
                        {title} - {quantity} x ${price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
