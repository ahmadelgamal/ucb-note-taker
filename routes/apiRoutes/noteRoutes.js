const router = require('express').Router();
const notes = require('../../db/db.json');

// Get /api/notes should read db.json and return all notes as JSON
router.get('/', (req, res) => {
  res.json(notes);
});

// should receive a new note to save on the request body, add it to the db.json file
// then return the new note to the client
router.post('/', (req, res) => {
  // set id based on what the next index of the array will be
  req.body.id = notes.length.toString();

  if (!addNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = addNote(req.body, notes);
    res.json(notes);
  }
});

// Delete /api/notes/:id should receive a query parameter containing the id of a note to delete
// It should read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file
router.delete('/:id', (req, res) => {
  res.json(notes);
});

module.exports = router;
