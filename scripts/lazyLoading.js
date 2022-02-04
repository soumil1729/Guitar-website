'use strict';

const allSections = document.querySelectorAll('.section');
// reveal sections
const revealSection = function (entries, observer) {
  entries.forEach(entrie => {
    if (!entrie.isIntersecting) return;
    entrie.target.classList.remove('section--hidden');
    observer.unobserve(entrie.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  entries.forEach(entrie => {
    if (!entrie.isIntersecting) return;
    entrie.target.src = entrie.target.dataset.src;
    entrie.target.addEventListener('load', () => {
      entrie.target.classList.remove('lazy-img');
    });

    observer.unobserve(entrie.target);
  });
};

const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
  rootMargin: '200px',
});

imageTargets.forEach(img => imageObserver.observe(img));
