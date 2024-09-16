import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/notificationActions';

const initialState = {
    notifications: [],
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.payload],
            };
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                notifications: state.notifications.filter(notification => notification.id !== action.payload),
            };
        default:
            return state;
    }
};

export default notificationReducer;
