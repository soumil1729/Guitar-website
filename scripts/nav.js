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
