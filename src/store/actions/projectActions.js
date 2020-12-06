import {firestore} from "redux-firestore";

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('project').add({
            ...project,
            authorFirstName: 'Stan',
            authorLastName: 'Franck',
            authorId: 12345,
            createAt: new Date()
        }).then( () => {
            dispatch({type: 'CREATE_PROJECT', payload:project});
        }).catch( (err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', payload:err});
        })
    }
};