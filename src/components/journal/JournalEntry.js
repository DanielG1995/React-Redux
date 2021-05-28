import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import { activeNote } from '../../actions/notes';


export const JournalEntry = ({ date, id, body, url, title }) => {

    const dispatch = useDispatch();
    const noteDate = moment(date);
    const handleSelectEntry = () => {
        dispatch(activeNote(id, { body, url, title, date }));
    }

    return (
        <div
            onClick={handleSelectEntry}
            className="journal__entry pointer"
        >
            {url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`
                    }}
                >
                </div>
            }
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>

                <p className="journal__entry-content">
                    {body}
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>

            </div>

        </div>
    )
}
