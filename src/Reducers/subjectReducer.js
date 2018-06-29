import { UPDATE_SUBJECT } from "../Actions/subjectAction";

export function subjectReducer(state = '', { type, payload }) {
    switch (type){
        case UPDATE_SUBJECT:
            return payload.subject;
        default:
            return state;
    }

}