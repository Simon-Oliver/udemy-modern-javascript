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
    body: 'this is now Simon. the second last note of the array'
  },
  {
    title: 'Last Note',
    body: 'this is now the last note of the array. One'
  }
];

function findNote(notes, noteTitle) {
  const index = notes.findIndex(e => e.title === noteTitle);
  return index >= 0 ? notes[index] : undefined;
}

const searchNote = (noteArray = [], query = '') => {
  const filterArray = noteArray.filter((note, index) => {
    return note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query);
  });
  return filterArray;
};

console.log(
  '---------------------------------\n',
  searchNote(notes, 'simon'),
  '\n---------------------------------'
);

// console.log(notes.length);
// console.log(findNote(notes, 'Last Note'));
