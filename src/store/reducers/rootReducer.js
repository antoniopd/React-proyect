import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";



export const rootReducer = combineReducers(
    {
        // estate name: reducer that control it
        todosState: todosReducer,
        filterState: filterReducer
        // ... add more states and reducers to include them in the store 
    }
)