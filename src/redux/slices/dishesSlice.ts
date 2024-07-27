import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Dish {
    id: string;
    title: string;
    price: number;
    image: string;
}

interface DishesState {
    dishes: Dish[];
    loading: boolean;
    error: string | null;
}

const initialState: DishesState = {
    dishes: [],
    loading: false,
    error: null,
};

export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
    try {
        const response = await axios.get('https://control-64-default-rtdb.europe-west1.firebasedatabase.app/dishes.json');
        console.log('API response:', response.data); // Логируем ответ
        return response.data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
});

const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDishes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDishes.fulfilled, (state, action) => {
                state.loading = false;
                console.log('Fetched dishes:', action.payload); // Логируем данные
                state.dishes = Object.keys(action.payload).map(key => ({
                    id: key,
                    ...action.payload[key]
                }));
            })
            .addCase(fetchDishes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch dishes';
                console.error('Fetch dishes error:', action.error.message); // Логируем ошибку
            });
    },
});

export default dishesSlice.reducer;
