import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesAdd:
            return {
                ...state,
                notes:[...state.notes,action.payload.note]
            }
        case types.notesLogoutClean:
            return {
                ...initialState
            }
        case types.notesSelect:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
               return {
                ...state,
                notes: [...action.payload.notes]
            }
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.payload.id ?
                        action.payload.note : note)

            }
        case types.notesDelete:
            
            return {
                ...state,
                notes: state.notes.filter((note) => note.id!==action.payload.id),
                active: null
            }
        default:
            return state;
    }

}