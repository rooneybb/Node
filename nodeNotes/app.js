const fs = require('fs'); //require is like import or using
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: bodyOptions
})
.command('list', 'List allNotes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'Remove a note', {
  title: titleOptions
})
.help()
.argv;
var command = process.argv[2];

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
}
else if (command == 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
else if (command == 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'note was removed' : 'note not found';
  console.log(message);
}
else if (command == 'read') {
var note = notes.getNote(argv.title);
if (note){
  console.log('note found');
  notes.logNote(note);
}else {
  console.log('note not found');
}

}
else {
  console.log('Command not recognized');
}
