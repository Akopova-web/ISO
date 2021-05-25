import { combineReducers, createStore } from "redux";
import {taskReducer} from "./taskReducer";

let reducers = combineReducers({
    tasksPage: taskReducer
});

export let store = createStore(reducers);