import { UPDATE_NAME } from "../Actions/userAction";


export function userReducer(state = '', {type, payload}) {
    switch (type) {
        case UPDATE_NAME:
            return payload.firstName;
        default:
            return state;


    }
}