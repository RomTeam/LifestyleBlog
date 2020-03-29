import React from 'react'
import {GET_CATEGORY_LIST} from '../../actions/adminActions'

export default function categoryReducer(state = [], action) {
    switch(action.type){
        case GET_CATEGORY_LIST : {
            state = action.categories;
            return [...state];
        }
        default: {
            return [...state];
        }
    }
}
