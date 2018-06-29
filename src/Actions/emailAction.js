export const UPDATE_EMAIL = 'email:userEmail';

export function userEmail(email) {
    return{
        type: UPDATE_EMAIL,
        payload: email
    }

}