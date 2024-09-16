export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = (notification) => ({
    type: ADD_NOTIFICATION,
    payload: notification,
});

export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id,
});