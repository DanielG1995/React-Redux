import { types } from "../types/types"
import { db } from '../firebase/firebase'



export const notesAdd = ({ noteId }) => {
    return {
        type: types.selectNote,
        payload: {
            noteId
        }
    }
}


export const startNewNote = () => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        const note = {
            title: 'Este es un titulo',
            body: 'Body ::::S',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(note);
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