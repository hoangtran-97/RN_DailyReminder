import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from '../Actions/actionTypes';

const initialState = {
    data: [],
};
const dashBoardReducers = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:
        return {
            ...state,
        };
    case REMOVE_ITEM:
        return {
            ...state,
        };
    case COMPLETE_ITEM:
        return {
            ...state,
        };
    default:
        return state;
    }
};
export default dashBoardReducers;
