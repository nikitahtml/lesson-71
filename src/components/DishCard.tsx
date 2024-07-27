import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

interface DishCardProps {
    dish: {
        id: string;
        title: string;
        price: number;
        image: string;
    };
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({ id: dish.id, quantity: 1 }));
    };

    return (
        <div>
            <img src={dish.image} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>${dish.price}</p>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    );
};

export default DishCard;
