import { types } from "../types/types"
import { firebase, googleAuth } from '../firebase/firebase'

import Swal from 'sweetalert2'

import { removeError, setError } from "./ui"
import { cleanNotes } from "./notes"


export const startLogout = () => {
    return (async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(cleanNotes());

    })
}

export const logout = () => {
    return {
        type: types.logout
    }
}

export const startLoading = () => {
    return {
        type: types.startLoading
    }
}

export const finishLoading = () => {
    return {
        type: types.finishLoading
    }
}
export const startLogin = (password, email) => {
    return ((dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                dispatch(finishLoading());
                dispatch(removeError());
            })
            .catch(err => {
                dispatch(finishLoading());
                Swal.fire('Error',err.message,'error');
                dispatch(setError(err.message))
            });

    })
}

export const registerAcc = (email, password, name) => {
    return ((dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password.toString())
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })
                dispatch(login(user.uid, user.displayName));
            });
    })
}

export const startGoogleLogin = () => {
    return ((dispatch) => {
        firebase.auth().signInWithPopup(googleAuth).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    })
}

export const login = (uid, displayName) => {
    console.log(uid, displayName)
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}
