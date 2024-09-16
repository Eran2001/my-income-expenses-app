import { combineReducers } from 'redux';
import incomeReducer from './incomeReducer';
import expenseReducer from './expenseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    income: incomeReducer,
    expenses: expenseReducer,
    notifications: notificationReducer,
});

export default rootReducer;