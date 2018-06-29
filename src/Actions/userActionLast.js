export const UPDATE_LAST = 'lastName:userLastName';


export function userLastName(lastName1) {
    return{
        type: UPDATE_LAST,
        payload:{
            lastName: lastName1
        }
    }

}