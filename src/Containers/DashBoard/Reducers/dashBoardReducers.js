import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from '../Actions/actionTypes';

const initialState = {
    items: {},
    isLoading: false,
    error: false
};
const dashBoardReducers = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:
        return {
            ...state,
            isLoading: true,
            error: false
        };
    case REMOVE_ITEM:
        return {
            ...state,
            isLoading: false,
            items: action.response,
            error: false
        };
    case COMPLETE_ITEM:
        return {
            ...state,
            isLoading: false,
            items: action.response,
            error: true
        };
    default:
        return state;
    }
};
export default dashBoardReducers;
