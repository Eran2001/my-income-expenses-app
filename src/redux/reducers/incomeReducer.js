import { ADD_INCOME } from '../actions/incomeActions';

const initialState = {
    incomeList: [],
    totalIncome: 0,
};

const incomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INCOME:
            const newIncomeList = [...state.incomeList, action.payload];
            const newTotalIncome = newIncomeList.reduce((acc, income) => acc + income.amount, 0);
            return {
                ...state,
                incomeList: newIncomeList,
                totalIncome: newTotalIncome,
            };
        default:
            return state;
    }
};

export default incomeReducer;
