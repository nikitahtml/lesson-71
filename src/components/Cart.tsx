import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Cart: React.FC = () => {
    const items = useSelector((state: RootState) => state.cart.items);

    return (
        <div>
            <h2>Корзина</h2>
            {items.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.id} - {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
