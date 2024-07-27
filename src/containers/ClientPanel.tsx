import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchDishes } from '../redux/slices/dishesSlice';
import DishCard from '../components/DishCard';

const ClientPanel: React.FC = () => {
    const dispatch = useDispatch();
    const { dishes, loading, error } = useSelector((state: RootState) => state.dishes);

    useEffect(() => {
        console.log('Dispatching fetchDishes action');
        dispatch(fetchDishes());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Menu</h1>
            {dishes && dishes.length > 0 ? (
                <div>
                    {dishes.map(dish => (
                        <DishCard key={dish.id} dish={dish} />
                    ))}
                </div>
            ) : (
                <div>No dishes available</div>
            )}
        </div>
    );
};

export default ClientPanel;
