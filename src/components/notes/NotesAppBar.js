import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>Fecha</span>
            <div>
                <button className="btn btn-primary mr-5">Guardar</button>
                <button className="btn btn-primary">Salir</button>
            </div>
        </div>
    )
}
