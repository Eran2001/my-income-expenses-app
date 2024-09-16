import { ADD_EXPENSE } from '../actions/expenseActions';

const initialState = {
    expenseList: [],
    totalExpenses: 0,
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            const newExpenseList = [...state.expenseList, action.payload];
            const newTotalExpenses = newExpenseList.reduce((acc, expense) => acc + expense.amount, 0);
            return {
                ...state,
                expenseList: newExpenseList,
                totalExpenses: newTotalExpenses,
            };
        default:
            return state;
    }
};

export default expenseReducer;
