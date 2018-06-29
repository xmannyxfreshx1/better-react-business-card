import { UPDATE_NAME } from "../Actions/userActions";


export function userReducer(state = '', {type, payload}) {
    switch (type) {
        case UPDATE_NAME:
            return payload.firstName;
        default:
            return state;


    }
}