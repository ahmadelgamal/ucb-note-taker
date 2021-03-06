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

  for (let i = 0; i < notes.length; i++) {
    if (note === notes[i]) {
      notes.splice(i, 1);
    }
  }

  // rewrites db.json using updatedNotes array
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notes)
  );
  return 'Ok';
}

module.exports = {addNote, deleteNote};