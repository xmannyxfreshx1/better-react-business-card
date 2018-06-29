import { UPDATE_LAST } from "../Actions/userActionLast";

export function userReducerLast(state = '', {type, payload}) {
    switch (type) {
        case UPDATE_LAST:
            return payload.lastName;
        default:
            return state;


    }
}