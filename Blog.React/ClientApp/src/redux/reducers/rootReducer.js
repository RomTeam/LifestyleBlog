import {combineReducers} from 'redux'
import productProducer from './productReducer';
import categoryReducer from './admin/categoryReducer'

const rootReducer = combineReducers(
    {
        productProducer,
        categoryReducer
    }
);

export default rootReducer;