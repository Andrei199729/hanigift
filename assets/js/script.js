const mainBannerBurger = document.querySelector(
  ".main__banner-catalog__burger"
);

const mainBannerBurgerHeader = document.querySelector(".header__menu-burger");

const menuItemsList = document.querySelectorAll(".menu-items__hover");
const menuTwoLevel = document.querySelector(".menu-items__two-container");

const sliderLine = document.querySelector(".hits__slider-line");
const nextBtn = document.querySelector(".hits__slider-slider__next");
const prevBtn = document.querySelector(".hits__slider-slider__prev");
const sliderLineReviwe = document.querySelector(
  ".reviews__slider-container__line"
);
const nextBtnReviwe = document.querySelector(".reviews__slider-btn__next");
const prevBtnReviwe = document.querySelector(".reviews__slider-btn__prev");

const btnCall = document.querySelector(".main__banner-telephon__btn");
const btnClose = document.querySelector(".popup__btn-close");
const popupCall = document.querySelector(".popup__request-call");

let offset = 0;
const wigthHits = 193;
const wigthReviwe = 945;

btnCall.addEventListener("click", function (e) {
  popupCall.classList.add("popup__request-call_opened");
});

btnClose.addEventListener("click", function (e) {
  popupCall.classList.remove("popup__request-call_opened");
});

// при подгрузке убираем блок
window.addEventListener("DOMContentLoaded", function () {
  menuTwoLevel.style.display = "none";
});

// для переключения активного класса и показа/скрытия меню
mainBannerBurger.addEventListener("click", function () {
  document.querySelector(".menu-items").classList.toggle("active");
});

mainBannerBurgerHeader.addEventListener("click", function () {
  document
    .querySelector(".header__lists-menu__burger")
    .classList.toggle("active");
});

// открытие второго меню при наведении
menuItemsList.forEach((item) => {
  item.addEventListener("mouseover", function () {
    menuTwoLevel.style.display = "flex";
  });

  item.addEventListener("mouseout", function () {
    menuTwoLevel.style.display = "none";
  });
});

// остатается открытым второе меню при наведении
menuTwoLevel.addEventListener("mouseover", function () {
  menuTwoLevel.style.display = "flex";
});

menuTwoLevel.addEventListener("mouseout", function () {
  menuTwoLevel.style.display = "none";
});

// slider

const swiper = new Swiper(".hits__container-slider", {
  // Настройки Swiper здесь
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1219: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".hits__slider-slider__next",
    prevEl: ".hits__slider-slider__prev",
  },
});

const swiperReview = new Swiper(".reviews__slider", {
  // Настройки Swiper здесь
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".reviews__slider-btn__next",
    prevEl: ".reviews__slider-btn__prev",
  },
});

const swiperRecentlyPurchased = new Swiper(".recently-purchased__slider", {
  // Настройки Swiper здесь
  slidesPerView: 4,
  spaceBetween: 48,
  loop: true,
  breakpoints: {
    324: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 48,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },

    840: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1110: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1140: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: ".recently-purchased__slider-slider__next",
    prevEl: ".recently-purchased__slider-slider__prev",
  },
});
