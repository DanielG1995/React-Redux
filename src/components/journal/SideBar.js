import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)

    const handleCerrarSesion = () => {
        dispatch(startLogout());
    }

    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <i className="far fa-moon" />
                <h3>{name}</h3>
                <button className="btn" onClick={handleCerrarSesion}>
                    Cerrar Sesiòn
                </button>
            </div>


            <div onClick={handleAddNew} className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p>
                    Nueva Nota
            </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
