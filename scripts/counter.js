const counters = document.querySelectorAll('.counter');
const sectionCounter = document.querySelector('.section-counters');
const speed = 200;

const increamentCounter = function () {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = +counter.textContent;
    const incr = target / speed;

    const updateCount = function () {
      if (count < target) {
        count += incr;
        counter.textContent = Math.floor(count);
        setTimeout(updateCount, 1);
      } else {
        count.textContent = target;
      }
    };

    updateCount();
  });
};

const startInreamentCounter = function (entries) {
  const [entrie] = entries;
  if (entrie.isIntersecting) {
    // console.log(entries);
    increamentCounter();
    counterObserver.unobserve(entrie.target);
  }
};

const counterObserver = new IntersectionObserver(startInreamentCounter, {
  root: null,
  threshold: 0.05,
});

counterObserver.observe(sectionCounter);
