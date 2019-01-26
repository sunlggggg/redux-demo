import { combineReducers } from 'redux'
import listReducer from './getListReducer';
export default combineReducers({
    list: listReducer,
})