import { types } from "../types/types"
import { db, firebase } from '../firebase/firebase'



export const notesAdd = ({ noteId }) => {
    return {
        type: types.selectNote,
        payload: {
            noteId
        }
    }
}


export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        console.log(uid);
        const note = {
            title: '',
            body: '',
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


