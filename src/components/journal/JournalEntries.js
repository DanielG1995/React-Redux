import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

   const {notes} = useSelector(state => state.notes)
    console.log(notes);
    return (
        <div className="journal__entries animate__animated animate__bounce">
            {
                notes.map(value => {
                    return <JournalEntry key={value.id} {...value} />

                })
            }
        </div>
    )
}
