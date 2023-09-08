const readNextButton = document.querySelector('.main-content__read-next');
const storyParagraph = document.querySelector('.main-content__story p:nth-child(2)');

const showMoreCompanies = document.querySelector('.main-content__showMore-companies');
const companies = document.querySelectorAll(
  '.main-content__choiceBrands .swiper-slide:nth-child(n + 9)',
);

readNextButton.addEventListener('click', (event) => {
  let target = event.target;
  event.preventDefault();
  storyParagraph.classList.toggle('active-story');
  if (storyParagraph.classList.contains('active-story')) {
    target.innerText = 'Скрыть';
    readNextButton.classList.add('close');
  } else {
    target.innerText = 'Читать дальше';
    readNextButton.classList.remove('close');
  }
});

showMoreCompanies.addEventListener('click', (event) => {
  let target = event.target;
  companies.forEach((item) => {
    const itemDisplay = item.style.display;
    if (itemDisplay === 'none' || itemDisplay === '') {
      item.style.display = 'grid';
      target.innerText = 'Скрыть';
      target.classList.add('close');
    } else {
      target.innerText = 'Показать все';
      item.style.display = 'none';
      target.classList.remove('close');
    }
  });
});

const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings);
  };

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    }
    if (swiper !== undefined) swiper.destroy(true, true);
    return;
  };

  breakpoint.addEventListener('change', checker);
  checker();
};

resizableSwiper('(max-width: 768px)', '.slider-1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
});
