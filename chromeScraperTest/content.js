const data = document.querySelectorAll('span.hidden-title');
const arr = Array.from(document.querySelectorAll('#tabs li:not(.tab-heading) span[id]'));

window.onload = () => {
  document.querySelectorAll('#tabs li:not(.tab-heading) span[id]')[0].click();
};
