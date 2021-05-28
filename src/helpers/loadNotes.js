import { db } from "../firebase/firebase";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  notesSnap.docs.forEach((snapH) => {
    notes.push({
      id: snapH.id,
      ...snapH.data(),
    });
  });
  return notes;
};
