const header = document.querySelector('.header');
const btnNav = document.querySelector('.btn-mobile-nav');
const mainnav = document.querySelector('.main-nav');

header.addEventListener('click', function (e) {
  if (e.target.classList.contains('icon-mobile-nav')) {
    header.classList.toggle('nav-open');
  }

  if (e.target.classList.contains('main-nav-link')) {
    header.classList.remove('nav-open');
  }
});

// smooth scrolling for safari
const mainNav = document.querySelector('.main-nav-list');

const smooth = function (e) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
};

mainNav.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('main-nav-link')) return;
  smooth(e);
});

const btnStartLearning = document.querySelector('.btn__startlearnig');
const btnDiscovermore = document.querySelector('.btn__discovermore');
btnStartLearning.addEventListener('click', function (e) {
  e.preventDefault();
  smooth(e);
});

btnDiscovermore.addEventListener('click', function (e) {
  e.preventDefault();
  smooth(e);
});

//sticky nav
const sectionHero = document.querySelector('.section-hero');
const navHeight = header.getBoundingClientRect().height;
const fixMargin = document.querySelector('.fix-margin');
fixMargin.style.marginTop = `${navHeight}px`;

const stickyNav = function (entries) {
  const [entrie] = entries;
  if (!entrie.isIntersecting) {
    header.classList.add('sticky');
    fixMargin.style.display = 'block';
  } else {
    header.classList.remove('sticky');
    sectionHero.classList.remove('fix-margin');
    fixMargin.style.display = 'none';
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(sectionHero);

//nav fade animation

const fadeInOut = function (e) {
  if (!e.target.classList.contains('main-nav-link')) return;
  const link = e.target;

  const siblings = e.target
    .closest('.main-nav')
    .querySelectorAll('.main-nav-link');
  const logo = e.target.closest('.header').querySelector('.logo-container');

  siblings.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });

  logo.style.opacity = this;
};

header.addEventListener('mouseover', fadeInOut.bind(0.6));
header.addEventListener('mouseout', fadeInOut.bind(1));
