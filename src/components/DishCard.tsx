import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

interface DishCardProps {
    dish: { id: string; title: string; price: number; image: string };
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(dish));
    };

    return (
        <div className="dish-card">
            <h3>{dish.title}</h3>
            <p>Цена: ${dish.price}</p>
            <img
                src={dish.image}
                alt={dish.title}
                onError={(e) => (e.currentTarget.src = '/path/to/default-image.jpg')} // Замените путь на путь к запасному изображению
                className="dish-image"
            />
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    );
};

export default DishCard;
