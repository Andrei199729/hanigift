const mainBannerBurger = document.querySelector(
  ".main__banner-catalog__burger"
);

const menuItemsList = document.querySelectorAll(".menu-items__hover");
const menuTwoLevel = document.querySelector(".menu-items__two");

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
function sliderNext(sliderLine, width) {
  const blockReviwe = sliderLineReviwe ? 140 : 0;

  offset = offset + width;
  if (offset > width) {
    offset = 0;
  }
  sliderLine.style.left = -offset + blockReviwe + "px";
}

function sliderPrev(sliderLine, width) {
  offset = offset - width;
  const blockReviwe = sliderLineReviwe ? 140 : 0;
  if (offset < 0) {
    offset = width;
  }
  sliderLine.style.left = -offset + blockReviwe + "px";
}

nextBtn.addEventListener("click", () => sliderNext(sliderLine, wigthHits));
prevBtn.addEventListener("click", () => sliderPrev(sliderLine, wigthHits));

nextBtnReviwe.addEventListener("click", () =>
  sliderNext(sliderLineReviwe, wigthReviwe)
);
prevBtnReviwe.addEventListener("click", () =>
  sliderPrev(sliderLineReviwe, wigthReviwe)
);
