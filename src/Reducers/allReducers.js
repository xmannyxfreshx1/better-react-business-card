import {userReducerLast} from '../Reducers/userLastName';
import {userReducer} from '../Reducers/userReducer';
import { combineReducers } from 'redux';
import {emailReducer} from "./emailReducer";
import {subjectReducer} from "./subjectReducer";
import {messageReducer} from "./messageReducer";

const allReducers = combineReducers({
    firstName: userReducer,
    lastName: userReducerLast,
    email: emailReducer,
    subject: subjectReducer,
    message: messageReducer
});

export default allReducers;