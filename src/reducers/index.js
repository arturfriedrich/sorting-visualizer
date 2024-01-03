import { combineReducers } from "redux";
import { array } from "./array";
import { algorithm } from "./algorithm";
import { isRunning } from "./running";
import { currentSwappers } from "./swappers";
import { currentMergeX } from "./mergeSort";

export default combineReducers({
    array,
    algorithm,
    isRunning,
    currentSwappers,
    currentMergeX
});