import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setAlgorithm = createAction('SET_ALGORITHM');

export default algorithm = handleActions({
    [setAlgorithm]: (state, action) => action.payload,
}, initialState);