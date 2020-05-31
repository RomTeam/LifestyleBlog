import {combineReducers} from 'redux'
import categoryReducer from './admin/categoryReducer'
import userReducer from './admin/userReducer'
import uploadFileReducer from './uploadFileReducer'
const rootReducer = combineReducers(
    {
        categoryReducer,
        userReducer,
        uploadFileReducer
    }
);

export default rootReducer;