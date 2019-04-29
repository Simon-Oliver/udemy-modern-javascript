const notes = [
  {
    title: 'A Note One',
    body: 'This is the first note.'
  },
  {
    title: 'Z Note Two',
    body: 'This is the middle note.'
  },
  {
    title: 'x Second Last Note',
    body: 'this is now Simon. the second last note of the array'
  },
  {
    title: 'b Last Note',
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

const sortNotes = array => {
  return array.sort((a, b) => {
    const x = a.title.toLowerCase();
    const y = b.title.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};
sortNotes(notes);
console.log(notes);
// console.log(notes.length);
// console.log(findNote(notes, 'Last Note'));
