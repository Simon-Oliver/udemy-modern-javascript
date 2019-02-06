const notes = [
  {
    title: 'Note One',
    body: 'This is the first note.'
  },
  {
    title: 'Note Two',
    body: 'This is the middle note.'
  },
  {
    title: 'Second Last Note',
    body: 'this is now the second last note of the array'
  },
  {
    title: 'Last Note',
    body: 'this is now the last note of the array'
  }
];

function findNote(notes, noteTitle) {
  const index = notes.findIndex(e => e.title === noteTitle);
  return index >= 0 ? notes[index] : undefined;
}

console.log(notes.length);
console.log(findNote(notes, 'Last Note'));
