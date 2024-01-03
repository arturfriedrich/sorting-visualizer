import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setArray = createAction('SET_ARRAY');

export default handleActions({
    [setArray]: (state, action) => action.payload,
}, initialState);