import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchDishes } from '../redux/slices/dishesSlice';
import DishCard from '../components/DishCard';

const ClientPanel: React.FC = () => {
    const dispatch = useDispatch();
    const { dishes, loading, error } = useSelector((state: RootState) => state.dishes);

    useEffect(() => {
        dispatch(fetchDishes());
    }, [dispatch]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div className="client-panel">
            <h1>Меню</h1>
            {dishes && dishes.length > 0 ? (
                <div className="dish-list">
                    {dishes.map(dish => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </div>
            ) : (
                <div>Нет доступных блюд</div>
            )}
        </div>
    );
};

export default ClientPanel;
