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
            time: '15',
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true,
            sat: false,
            sun: true,
            done: false,
        },
        {
            title: 'Reminder 3',
            time: '15',
            mon: true,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            done: false,
        },
        {
            title: 'Reminder 4',
            time: '15',
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: true,
            sat: false,
            sun: false,
            done: false,
        },
        {
            title: 'Reminder 5',
            time: '15',
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true,
            sat: false,
            sun: true,
            done: true,
        },
        {
            title: 'Reminder 5',
            time: '15',
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true,
            sat: false,
            sun: true,
            done: true,
        },
        {
            title: 'Reminder 5',
            time: '15',
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true,
            sat: false,
            sun: true,
            done: true,
        },
        {
            title: 'Reminder 5',
            time: '15',
            mon: true,
            tue: false,
            wed: true,
            thu: false,
            fri: true,
            sat: false,
            sun: true,
            done: true,
        },
        {
            title: 'Reminder 5##',
            time: '15',
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
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
