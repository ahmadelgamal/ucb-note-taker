const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

function addNote(note) {
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes)
  );
  return note;
}

function deleteNote(noteId) {
  const note = notes.find(note => note.id === noteId);
  
  // creates new array to hold new array after deleted note
  let updatedNotes = [];
  for (let i = 0; i < notes.length; i++) {
    if (notes[i] !== note) {
      updatedNotes.push(notes[i]);
    }
  }

  // rewrites notes array after deleting note
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(updatedNotes)
  );
  return;
}

module.exports = {addNote, deleteNote};