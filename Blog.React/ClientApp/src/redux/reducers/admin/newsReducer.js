import React from 'react'
import {GET_NEWS_LIST, DELETE_NEWS} from '../../actions/adminActions'

const initState = {
    newses: [],
    totalRows: 0
};

export default function NewsReducer(state = initState, action) {
    switch(action.type){
        case GET_NEWS_LIST : {
            state = {
                newses: action.newses,
                totalRows: action.totalRows
            }
            return {...state};
        }
        case DELETE_NEWS: {
            let index = state.newses.findIndex(m => m.id === action.id);
            state.newses.splice(index, 1);
            state.newses = state.newses;
            state.totalRows -= 1;
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}