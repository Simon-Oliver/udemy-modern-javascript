console.log('Script Loaded');

const btn = document.querySelector('#btn');
const input = document.querySelector('#textInput');
const notes = document.querySelectorAll('.notes p');

const text = (array, query) => {
  array.forEach(e => {
    if (e.textContent.includes(query.value) && query.value !== '') {
      e.remove();
    }
  });
  clearQuery(query);
};

const clearQuery = inputToClear => {
  inputToClear.value = '';
};

btn.addEventListener(
  'click',
  () => {
    text(notes, input);
  },
  false
);
