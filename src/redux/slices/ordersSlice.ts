import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

interface Order {
    id?: string;
    items: Record<string, number>;
    total: number;
}

interface OrdersState {
    orders: Order[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: OrdersState = {
    orders: [],
    status: 'idle',
};

// Thunks
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axiosApi.get('/orders.json');
    return response.data;
});

export const completeOrder = createAsyncThunk('orders/completeOrder', async (id: string) => {
    await axiosApi.delete(`/orders/${id}.json`);
    return id;
});

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'idle';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(completeOrder.fulfilled, (state, action) => {
                state.orders = state.orders.filter(order => order.id !== action.payload);
            });
    },
});

export default ordersSlice.reducer;
