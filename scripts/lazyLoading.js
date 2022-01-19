'use strict';

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entrie => {
    if (!entrie.isIntersecting) return;
    entrie.target.classList.remove('section--hidden');
    observer.unobserve(entrie.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
