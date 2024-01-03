import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setSwappers = createAction('SET_SWAPPERS');

export default handleActions({
    [setSwappers]: (state, action) => {
        if (action.payload.length === 0) {
            return [];
        }
        return action.concat(action.payload);
    },
}, initialState);