import { UPDATE_MESSAGE } from "../Actions/messageAction";


export function messageReducer(state = '', { type, payload }) {
    switch (type){
        case UPDATE_MESSAGE:
            return payload.message;
        default:
            return state;
    }

}