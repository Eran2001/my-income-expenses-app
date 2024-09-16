import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalExpenses: 0,
  expenseList: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
      state.totalExpenses += action.payload.amount;
    },
    removeExpense: (state, action) => {
      const index = state.expenseList.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) {
        state.totalExpenses -= state.expenseList[index].amount;
        state.expenseList.splice(index, 1);
      }
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
