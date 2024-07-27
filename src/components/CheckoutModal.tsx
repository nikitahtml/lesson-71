import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clearCart } from '../redux/slices/cartSlice';

interface CheckoutModalProps {
    onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleOrder = () => {
        dispatch(clearCart());
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Оформление заказа</h2>
                {Object.keys(cartItems).length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <div>
                        <ul>
                            {Object.entries(cartItems).map(([dishId, quantity]) => (
                                <li key={dishId}>
                                    ID блюда: {dishId}, Количество: {quantity}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleOrder}>Заказать</button>
                        <button onClick={onClose}>Отмена</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
