import { combineReducers } from 'redux';
import dashBoardReducers from '../Containers/DashBoard/Reducers/dashBoardReducers';

const allReducers = combineReducers({
    dashBoardReducers
});
export default allReducers;
