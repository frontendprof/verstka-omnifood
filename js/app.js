const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const year = document.querySelector('.year');
const hrefEls = document.querySelectorAll('a:link');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

// Automatically changing year value in the footer
const date = new Date().getFullYear();
year.textContent = date;

// Smooth scroll animation for broswers incompatible with scroll behavior feature

hrefEls.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (href !== '#' && href.startsWith('#')) {
      const els = document.querySelector(href);
      els.scrollIntoView({
        behavior: 'smooth',
      });
    }

    this.classList.contains('main-nav-link') &&
      headerEl.classList.toggle('nav-open');
  });
});

// Fixed navigation
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add('fixed');
    }
    if (ent.isIntersecting) {
      document.body.classList.remove('fixed');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-160px',
  }
);

obs.observe(sectionHeroEl);
