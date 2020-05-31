import React from 'react'
import {SAVE_FILES_TEMPORARY, DELETE_FILES} from '../actions/adminActions'

export default function uploadFileReducer(state = [], action) {
    switch(action.type){
        case SAVE_FILES_TEMPORARY: {
            state = action.files;
            return [...state];
        }
        case DELETE_FILES: {
            state = [];
            return [...state];
        }
        default: 
        {
            return [...state];
        }
    }
}
