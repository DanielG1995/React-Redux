import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input type="text"
                    placeholder="Título"
                    autoComplete="off"
                    className="notes__title-input" />
                <textarea
                    placeholder="Qué pasó hoy?"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image mt-5">
                    <img alt="img" src="https://img.ecologiahoy.com/2017/06/paisajes-naturales-26-768x480.jpeg"/>
                </div>
            </div>


        </div>
    )
}
