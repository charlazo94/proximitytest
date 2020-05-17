import {combineReducers} from 'redux';
import {dataReducer} from 'react-data-components';

export default combineReducers({
    data: dataReducer
});