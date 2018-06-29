export const UPDATE_NAME = 'firstName:userName';


export function userName(firstName1) {
    return{
        type: UPDATE_NAME,
        payload:{
            firstName: firstName1
        }
    }

}
