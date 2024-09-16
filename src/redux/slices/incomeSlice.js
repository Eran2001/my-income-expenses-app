import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalIncome: 0,
  incomeList: [],
};

const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomeList.push(action.payload);
      state.totalIncome += action.payload.amount;
    },
    removeIncome: (state, action) => {
      const index = state.incomeList.findIndex(
        (income) => income.id === action.payload.id
      );
      if (index !== -1) {
        state.totalIncome -= state.incomeList[index].amount;
        state.incomeList.splice(index, 1);
      }
    },
  },
});

export const { addIncome, removeIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
