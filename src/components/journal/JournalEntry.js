import React from 'react'
import { useDispatch } from 'react-redux'
import { notesAdd } from '../../actions/notes';

export const JournalEntry = ({ value }) => {

    const dispatch = useDispatch();

    const handleSelectEntry = () => {
        dispatch(notesAdd('id'));
    }

    return (
        <div
            onClick={handleSelectEntry}
            className="journal__entry pointer"
        >
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://blogdestinia.com/wp-content/uploads/2019/06/gran-canon.jpg)'
                }}
            >

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Paisaje
                </p>

                <p className="journal__entry-content">
                    Estoy aprendiendo a programar en React, para poder salirme del trabajo alv
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>

        </div>
    )
}
