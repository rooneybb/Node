const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  var duplicateNotes = notes.filter((note) => note.title == title); //same as return note.title == title

  if(duplicateNotes.length == 0) {
    notes.push(note); //push adds to array
    saveNotes(notes);
    console.log('Note has been added');
    return note;
  }
  else {
    console.log('Duplicate Note: Note NOT added');
  }
};

var getAll = () => {
  return fetchNotes();
};

var removeNote = (title) => {
  console.log('Removing : ', title);
  var notes = fetchNotes();
  var note = {
    title
  };
  var duplicateNotes = notes.filter((note) => note.title != title);
    saveNotes(duplicateNotes);

    return notes.length !== duplicateNotes.length;

};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};


var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};


module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};
