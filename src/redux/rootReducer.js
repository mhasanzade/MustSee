import { combineReducers } from "redux";
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
    list: listReducer,
});

export default rootReducer;