import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from './actionTypes';


export const addItem = params => ({
    type: ADD_ITEM,
    params,
});

export const removeItem = params => ({
    type: REMOVE_ITEM,
    params,
});

export const completeItem = params => ({
    type: COMPLETE_ITEM,
    params,
});
