console.log('Script Loaded');

const btn = document.querySelector('#btn');
const title = document.querySelector('.header');

const text = () => {
  title.textContent = 'Test';
};

btn.addEventListener('click', text, false);
