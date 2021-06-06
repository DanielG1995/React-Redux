import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [values, handleInputChange, reset] = useForm(note);
  const { title, body} = values;
  const activeId = useRef(note.id);
  const urlNote = useRef(note.url);
  useEffect(() => {
    if (activeId.current !== note.id || urlNote.current !== note.url ) {
      reset(note);
      activeId.current = note.id;
      urlNote.current = note.url;
    }
    
  }, [reset, note]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch])
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Título"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
          className="notes__title-input"
        />
        <textarea
          placeholder="Qué pasó hoy?"
          className="notes__textarea"
          name="body"
          onChange={handleInputChange}
          value={body}
        ></textarea>
        {note.url && (
          <div className="notes__image mt-5">
            <img alt="img" name="url"  src={note.url} />
          </div>
        )}
      </div>
    </div>
  );
};
