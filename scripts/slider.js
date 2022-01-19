'use strict';
import testimonials from './data.js';

const slider = function () {
  const slider = document.querySelector('.slide');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');

  const maxSlide = testimonials.length;
  let currSlide = 0;

  testimonials.forEach(testimonial => {
    slider.insertAdjacentHTML(
      'beforeend',
      `
    <div class="testimonials">
              <div class="testimonial-quote-wrapper">
                <div class="testimonial-quote">
                  <img
                    class="testimonial-img"
                    src="./image/Testimonials/testimonial-quote.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="testimonial-text-box"> 
                <h5 class="testimonial-header">
                  ${testimonial.heading}
                </h5>
                <blockquote class="testimonial--text">
                  ${testimonial.text}
                </blockquote>        
                <address class="testimonial-author">
                  <img
                    class="testimonial-photo"
                    src=${testimonial.image}
                    alt="testimonial user image"
                  />
                  <h6 class="testimonial-name">${testimonial.name}</h6>
                  <p class="testimonial-location">${testimonial.address}</p>
                </address>
              </div>
            </div>
          </div>
    
    `
    );
  });

  const allSlides = document.querySelectorAll('.testimonials');

  const goSlide = function (currSlide) {
    allSlides.forEach((testimonial, i) => {
      testimonial.style.transform = `translate(${100 * (i - currSlide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currSlide === maxSlide - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goSlide(currSlide);
  };

  const prevSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide - 1;
    } else {
      currSlide--;
    }
    goSlide(currSlide);
  };

  const initialization = () => {
    goSlide(0);
  };
  initialization(); //function call

  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);
};

if (testimonials.length) slider();
