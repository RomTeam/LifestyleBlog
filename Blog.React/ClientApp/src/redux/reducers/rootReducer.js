import {combineReducers} from 'redux'
import categoryReducer from './admin/categoryReducer'
import userReducer from './admin/userReducer'
import uploadFileReducer from './uploadFileReducer'
import newsReducer from './admin/newsReducer'
const rootReducer = combineReducers(
    {
        categoryReducer,
        userReducer,
        uploadFileReducer,
        newsReducer
    }
);

export default rootReducer;