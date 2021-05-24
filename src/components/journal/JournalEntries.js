import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {

    const entries = [1];

    return (
        <div className="journal__entries">
            {
                entries.map(value => {
                    return <JournalEntry key={value} value={value} />

                })
            }
        </div>
    )
}
