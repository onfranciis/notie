export const receiveNote = () => {
  return JSON.parse(window.localStorage.getItem("Notes")) ?? [];
};

export const sendNote = (Note) => {
  const existingNote = receiveNote();
  window.localStorage.setItem("Notes", JSON.stringify([...existingNote, Note]));
};

export const updateNote = (Note, ID) => {
  const existingNote = receiveNote();
  existingNote[ID] = Note;
  window.localStorage.setItem("Notes", JSON.stringify([...existingNote]));
};

export const deleteNote = (ID) => {
  const existingNote = receiveNote();
  window.localStorage.setItem(
    "Notes",
    JSON.stringify(existingNote.slice(0, ID).concat(existingNote.slice(ID + 1)))
  );
};
