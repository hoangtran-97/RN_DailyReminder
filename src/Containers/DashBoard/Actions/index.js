import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from './actionTypes';


export const addItemAction = params => ({
    type: ADD_ITEM,
    params,
});

export const removeItemAction = index => ({
    type: REMOVE_ITEM,
    index,
});

export const completeItemAction = params => ({
    type: COMPLETE_ITEM,
    params,
});
