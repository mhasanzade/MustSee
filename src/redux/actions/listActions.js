import * as actionTypes from './action-types/actionTypes';

export const addToList = (data) => {
    return {
        type: actionTypes.ADD_TO_LIST,
        payload: data
    }
}

export const removeFromList = (data) => {
    return {
        type: actionTypes.REMOVE_FROM_LIST,
        payload: data
    }
}

