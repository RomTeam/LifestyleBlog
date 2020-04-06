import React from 'react'
import {GET_CATEGORY_LIST, DELETE_CATEGORY} from '../../actions/adminActions'

const initState = {
    categories: [],
    totalRows: 0
};

export default function categoryReducer(state = initState, action) {
    switch(action.type){
        case GET_CATEGORY_LIST : {
            state = {
                categories: action.categories,
                totalRows: action.totalRows
            }
            return {...state};
        }
        case DELETE_CATEGORY: {
            let index = state.categories.findIndex(m => m.id === action.id);
            state.categories.splice(index, 1);
            state.categories = state.categories;
            state.totalRows -= 1;
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}
