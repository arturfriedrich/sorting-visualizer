import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setSorted = createAction('SET_SORTED');

export const currentSorted = handleActions({
    [setSorted]: (state, action) => {
        if (action.payload.length === 0) {
            return [];
        }
        return action.concat(action.payload);
    },
}, initialState);