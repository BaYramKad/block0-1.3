import '../index.css';

const readNextButton = document.querySelector('.main-content__read-next');
const storyParagraph = document.querySelector('.main-content__story p:nth-child(2)');

const companies = document.querySelectorAll(
  '.main-content__choiceBrands .swiper-slide:nth-child(n + 9)',
);

const repairSlides = document.querySelectorAll('.repair-slide:nth-child(n + 5)');

const closeBtnPopup = document.querySelector('.menu-popup__close-btn');
const openBtnPopup = document.querySelector('.menu__burget');
const popupMenu = document.querySelector('.menu-popup');
const outside = document.querySelector('.outside');

const callPopupItem = document.querySelector('.call-popup');
const callOutsideItems = document.querySelector('.call-outside');

const feedBackPopupItem = document.querySelector('.feedback-popup');
const feedBackOutsideItem = document.querySelector('.feedback-outside');

document.addEventListener('click', (event) => {
  if (event.target.matches('.feedback-for-support')) {
    feedBackPopupItem.classList.remove('feedback-popup-state-cloused');
    feedBackPopupItem.classList.add('feedback-popup-state-open');
    feedBackOutsideItem.classList.add('feedback-popup-click-outside');
  } else if (
    event.target.matches('.feedback-popup__clouse-btn') ||
    event.target.matches('.feedback-popup-click-outside')
  ) {
    feedBackPopupItem.classList.remove('feedback-popup-state-open');
    feedBackOutsideItem.classList.remove('feedback-popup-click-outside');
    feedBackPopupItem.classList.add('feedback-popup-state-cloused');
  }
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.call-for-support')) {
    callPopupItem.classList.remove('call-popup-state-cloused');
    callPopupItem.classList.add('call-popup-state-open');
    callOutsideItems.classList.add('call-popup-click-outside');
  } else if (
    event.target.matches('.call-popup__clouse-btn') ||
    event.target.matches('.call-popup-click-outside')
  ) {
    callPopupItem.classList.remove('call-popup-state-open');
    callOutsideItems.classList.remove('call-popup-click-outside');
    callPopupItem.classList.add('call-popup-state-cloused');
  }
});

document.addEventListener('click', (event) => {
  if (event.target.matches('.menu__burget')) {
    popupMenu.classList.remove('popup-state-cloused');
    popupMenu.classList.add('popup-state-open');
    outside.classList.add('menu-popup__click-outside');
  } else if (
    event.target.matches('.menu-popup__close-btn') ||
    event.target.matches('.menu-popup__click-outside')
  ) {
    popupMenu.classList.remove('popup-state-open');
    popupMenu.classList.add('popup-state-cloused');
    outside.classList.remove('menu-popup__click-outside');
  }
});

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

const showMoreItems = (items, target) => {
  items.forEach((item) => {
    const itemDisplay = item.style.display;
    if (itemDisplay === 'none' || itemDisplay === '') {
      item.style.display = 'block';
      target.innerText = 'Скрыть';
      target.classList.add('close');
    } else {
      target.innerText = 'Показать все';
      item.style.display = 'none';
      target.classList.remove('close');
    }
  });
};

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.matches('.main-content__showMore-companies')) {
    showMoreItems(companies, target);
  } else if (target.matches('.main-content__showMore-repair')) {
    showMoreItems(repairSlides, target);
  }
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

resizableSwiper('(max-width: 768px)', '.slider-2', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
});

resizableSwiper('(max-width: 768px)', '.slider-3', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
});
