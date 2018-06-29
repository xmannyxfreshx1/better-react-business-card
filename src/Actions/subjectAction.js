export const UPDATE_SUBJECT = 'subject:Subject';


export function userSubject(subject) {
    return{
        type: UPDATE_SUBJECT,
        payload:{
            subject
        }
    }

}