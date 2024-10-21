import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // Increment by the value passed in the action payload
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // Decrement by the value passed in the action payload
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementByAmount, decrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;