import { combineReducers } from 'redux';
import authReducer from './features/auth-slice';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
