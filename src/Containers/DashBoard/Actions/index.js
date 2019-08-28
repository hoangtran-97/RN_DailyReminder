import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from './actionTypes';


export const addItemAction = params => ({
    type: ADD_ITEM,
    params,
});

export const removeItemAction = (index, test) => ({
    type: REMOVE_ITEM,
    index,
    test
});

export const completeItemAction = params => ({
    type: COMPLETE_ITEM,
    params,
});
