import { createAction, handleActions } from 'redux-actions';

const initialState = [];

export const setCurrentMergeX = createAction('SET_CURRENT_MERGEX');

export default handleActions({
    [setCurrentMergeX]: (state, action) => action.payload,
}, initialState);