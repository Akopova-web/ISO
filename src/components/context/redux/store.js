import { combineReducers, createStore } from "redux";
import {taskReducer} from "./taskReducer";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    tasksPage: taskReducer,
    form: formReducer
});

export let store = createStore(reducers);