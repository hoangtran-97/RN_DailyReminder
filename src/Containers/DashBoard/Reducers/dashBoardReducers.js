import {
    ADD_ITEM, REMOVE_ITEM, COMPLETE_ITEM
} from '../Actions/actionTypes';

const initialState = {
    data:
        [{
            title: 'Reminder 1',
            time: '150',
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: false,
            sun: false,
            done: true,
        },
        {
            title: 'Reminder 2',
            time: '150',
            mon: true,
            tue: true,
            wed: true,
            thu: true,
            fri: true,
            sat: false,
            sun: false,
            done: false,
        }]
};
const dashBoardReducers = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ITEM:
        return {
            ...state,
        };
    case REMOVE_ITEM:
        state.data.splice(action.index, 1);
        return Object.assign({}, state, {
            data: state.data
        });
    case COMPLETE_ITEM:
        return {
            ...state,
        };
    default:
        return state;
    }
};
export default dashBoardReducers;
