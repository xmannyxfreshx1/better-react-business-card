export const UPDATE_MESSAGE = 'message:userMessage';


export function userMessage(body) {
    return{
        type: UPDATE_MESSAGE,
        payload:{
            message:body
        }
    }

}
