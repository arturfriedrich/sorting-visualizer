import { createAction, handleActions } from 'redux-actions';

const initialState = false;

export const setRunning = createAction('SET_RUNNING');

export default handleActions({
    [setRunning]: (state, action) => action.payload,
}, initialState);