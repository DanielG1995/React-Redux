import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeleteNote, startSaveNote, startUploadFile } from '../../actions/notes';

export const NotesAppBar = () => {

    const { active: note } = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const handleSaveNote = () => {
        dispatch(startSaveNote(note));
    }
    const handleUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch(startUploadFile(file));
        }
    }

    const handleDeleteNote = (e) => {
        dispatch(startDeleteNote(note));
    }

    return (
        <div className="notes__appbar">
            <span>Fecha</span>
            <input type="file"
                id="fileSelector"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <button
                    className="btn btn-primary mr-5"
                    onClick={handleSaveNote}
                >Guardar
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleUpload}
                >
                    Cargar foto
                </button>
                <button
                    className="btn btn-danger ml-5"
                    onClick={handleDeleteNote}
                >
                    Eliminar Nota
                </button>
            </div>
        </div>
    )
}
