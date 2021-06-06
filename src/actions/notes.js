import { types } from "../types/types"
import { db } from '../firebase/firebase'
import Swal from "sweetalert2"
import { fileUpload } from "../helpers/fileUpload"



export const notesAdd = (note) => {
    return {
        type: types.notesAdd,
        payload: {
            note
        }
    }
}
export const cleanNotes = () => {
    return {
        type: types.notesLogoutClean,
    }
}


export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const note = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(note);
        dispatch(activeNote(doc.id,note));
        dispatch(notesAdd({...note,id:doc.id}));
    }

}

export const activeNote = (id, note) => ({
    type: types.notesSelect,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: {
        notes: [...notes]
    }
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!note.url) {
            delete note.url;
        }
        const noteFire = { ...note };

        delete noteFire.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteFire);
        dispatch(refreshNote(note.id, note));
        Swal.fire('Guardado', '', 'success');

    }
}

export const refreshNote = (id, note) => {
    return {
        type: types.notesUpdate,
        payload: {
            id, note
        }
    }
}

export const startUploadFile = (file) => {
    return (async (dispatch, getState) => {
        const { active } = getState().notes;
        Swal.fire({
            title: 'Cargando...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }

        })
        const fileUrl = await fileUpload(file);
        active.url = fileUrl;
        dispatch(startSaveNote(active));
        Swal.close();
    })
}

export const deleteNote = (id) => {
    return {
        type: types.notesDelete,
        payload: {
            id
        }
    }
}

export const startDeleteNote = (note) => {
    return (async (dispatch, getState) => {
        Swal.fire({
            title: 'Borrando...',
            text: 'Por favor espere...',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading();
            }

        })
        const { uid } = getState().auth;
        await db.doc(`${uid}/journal/notes/${note.id}`).delete();
        dispatch(deleteNote(note.id));
        Swal.close();
    })
}