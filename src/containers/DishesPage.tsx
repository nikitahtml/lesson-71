import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchDishes, addDish, updateDish, deleteDish } from '../redux/slices/dishesSlice';

const DishesPage: React.FC = () => {
    const dispatch = useDispatch();
    const { dishes, status, error } = useSelector((state: RootState) => state.dishes);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchDishes());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>{error}</div>;

    return (
        <div>
            <h1>Dishes</h1>
        </div>
    );
};

export default DishesPage;
