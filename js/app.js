const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const year = document.querySelector('.year');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// Automatically changing year value in the footer
const date = new Date().getFullYear();
year.textContent = date;
