import { UPDATE_EMAIL } from "../Actions/emailAction";

export function emailReducer(state = '', { type, payload }) {
    switch (type){
        case UPDATE_EMAIL:
            return payload;
        default:
            return state;
    }

}