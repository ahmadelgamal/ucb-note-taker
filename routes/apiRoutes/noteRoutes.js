const router = require('express').Router();
const uniqid = require('uniqid');
const notes = require('../../db/db.json');
const { addNote, deleteNote } = require('../../controllers/notes');

// Get /api/notes/ should read db.json and return all notes as JSON
router.get('/', (req, res) => {
  res.json(notes);
});

// Post /api/notes/ should receive a new note to save on the request body,
// add it to the db.json file, then return the new note to the client
router.post('/', (req, res) => {
  // set random unique id using uniqid module
  req.body.id = uniqid();
  const note = addNote(req.body);
  res.json(note);
});

// Delete /api/notes/:id should receive a query parameter containing the id of a note to delete
// It should read all notes from the db.json file, remove the note with the given id property, 
// and then rewrite the notes to the db.json file
router.delete('/:id', (req, res) => {
  const deleteReturn = deleteNote(req.params.id);
  if (deleteReturn === 'Ok') res.sendStatus(200);
  else res.send('Error deleting note!');
});

module.exports = router;
