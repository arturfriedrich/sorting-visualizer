import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setAlgorithm = createAction('SET_ALGORITHM');

export default handleActions({
    [setAlgorithm]: (state, action) => action.payload,
}, initialState);