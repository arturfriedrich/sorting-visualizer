import { createAction, handleActions } from 'redux-actions';

const initialState = false;

export const setRunning = createAction('SET_RUNNING');

export const isRunning = handleActions({
    [setRunning]: (state, action) => action.payload,
}, initialState);