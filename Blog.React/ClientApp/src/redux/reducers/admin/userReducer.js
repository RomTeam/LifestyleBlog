import React from 'react'
import {GET_USER_LIST, DELETE_USER} from '../../actions/adminActions'

const initState = {
    users: [],
    totalRows: 0
};

export default function userReducer(state = initState, action) {
    switch(action.type){
        case GET_USER_LIST : {
            state = {
                users: action.users,
                totalRows: action.totalRows
            }
            return {...state};
        }
        case DELETE_USER: {
            let index = state.users.findIndex(m => m.id === action.id);
            state.users.splice(index, 1);
            state.users = state.users;
            state.totalRows -= 1;
            return {...state};
        }
        default: {
            return {...state};
        }
    }
}
