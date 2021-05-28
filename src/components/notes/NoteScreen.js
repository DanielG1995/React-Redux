import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [values, handleInputChange, reset] = useForm(note);
  const { title, body, url } = values;
  const activeId = useRef(note.id);
  useEffect(() => {
    if (activeId.current !== note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [reset, note]);
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
          className="notes__title-input"
        />
        <textarea
          placeholder="Qué pasó hoy?"
          className="notes__textarea"
          name="desc"
          onChange={handleInputChange}
          value={body}
        ></textarea>
        {url && (
          <div className="notes__image mt-5">
            <img alt="img" src={url} />
          </div>
        )}
      </div>
    </div>
  );
};
