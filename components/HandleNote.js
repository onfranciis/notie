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
