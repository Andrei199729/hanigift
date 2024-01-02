let ready = () => {
  const mainBannerBurger = document.querySelector(
    ".main__banner-catalog__burger"
  );

  const mainBannerBurgerHeader = document.querySelector(".header__menu-burger");

  const menuItemsList = document.querySelectorAll(".menu-items__hover");
  const menuTwoLevel = document.querySelector(".menu-items__two-container");

  const btnCall = document.querySelector(".main__banner-telephon__btn");
  const btnClose = document.querySelector(".popup__btn-close");
  const popupCall = document.querySelector(".popup__request-call");

  const btnReviewsClients = document.querySelector(".reviews-clients__btn");
  const popupReviewsClients = document.querySelector(".popup__reviews-clients");

  const modalBg = document.querySelector(".modal-bg");

  const btnCheckAll = document.querySelector(".basket__checkbox-input__all");
  const btnInputAll = document.querySelectorAll(".basket__checkbox-input");
  const deleteSelected = document.querySelector(".basket__btn-delete");

  // страница профиля кнопки и инпут дизейбл, и изменяет текст
  const personalAreaBtn = document.querySelectorAll(".personal__area-btn");
  const personalAreaInput = document.querySelectorAll(".personal__area-input");
  let isEditing = false;
  // мобильная форма отзывов

  const blockFormReviewsClients = document.querySelector(
    ".popup__container_reviews-clients"
  );

  const blockReviewsClients = document.querySelector(
    ".gifts-for-men__container"
  );

  // классы открытия попапов
  const popupRequestCallOpened = "popup__request-call_opened";
  const popupReviewsClientsOpened = "popup__reviews-clients_opened";

  // массив объектов попапов
  const arrOpened = [
    { openedPopup: popupRequestCallOpened, popup: popupCall },
    {
      openedPopup: popupReviewsClientsOpened,
      popup: popupReviewsClients,
    },
  ];

  // закрытие отдельных попапов
  function closeModal() {
    arrOpened.forEach((opened) => {
      opened.popup?.classList.remove(opened.openedPopup);
      modalBg.style.display = "none";
    });
    blockFormReviewsClients.style.display = "none";
    blockReviewsClients.style.display = "block";
  }

  function closeModalOnEsc(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  if (btnCall) {
    btnCall.addEventListener("click", function (e) {
      popupCall.classList.add(popupRequestCallOpened);
      modalBg.style.display = "block";
      document.addEventListener("keydown", closeModalOnEsc);
    });
  }

  if (btnReviewsClients) {
    btnReviewsClients.addEventListener("click", function (e) {
      if (window.innerWidth > 500) {
        popupReviewsClients.classList.add(popupReviewsClientsOpened);
        modalBg.style.display = "block";
      }
      if (window.innerWidth <= 500) {
        modalBg.style.display = "none";
        blockFormReviewsClients.style.display = "block";
        blockReviewsClients.style.display = "none";
      }
      document.addEventListener("keydown", closeModalOnEsc);
    });
  }

  if (btnClose) {
    btnClose.addEventListener("click", function (e) {
      closeModal();
    });
  }

  if (modalBg) {
    modalBg.addEventListener("click", function (e) {
      closeModal();
    });
  }

  // при подгрузке убираем блок
  window.addEventListener("DOMContentLoaded", function () {
    menuTwoLevel.style.display = "none";
  });

  // для переключения активного класса и показа/скрытия меню
  if (mainBannerBurger) {
    mainBannerBurger.addEventListener("click", function () {
      document.querySelector(".menu__container").classList.toggle("active");
    });
  }

  if (mainBannerBurgerHeader) {
    mainBannerBurgerHeader.addEventListener("click", function () {
      document
        .querySelector(".header__lists-menu__burger")
        .classList.toggle("active");
    });
  }

  // открытие второго меню при наведении
  if (menuItemsList) {
    menuItemsList.forEach((item) => {
      item.addEventListener("mouseover", function () {
        menuTwoLevel.style.display = "flex";
      });

      item.addEventListener("mouseout", function () {
        menuTwoLevel.style.display = "none";
      });
    });
  }

  // остатается открытым второе меню при наведении
  if (menuTwoLevel) {
    menuTwoLevel.addEventListener("mouseover", function () {
      menuTwoLevel.style.display = "flex";
    });
  }

  if (menuTwoLevel) {
    menuTwoLevel.addEventListener("mouseout", function () {
      menuTwoLevel.style.display = "none";
    });
  }

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
    spaceBetween: 20,
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
      nextEl: ".recently__slider-slider__next",
      prevEl: ".recently__slider-slider__prev",
    },
  });

  const swiperRecentlyPurchasedElement = new Swiper(
    ".catalog-element__slider",
    {
      // Настройки Swiper здесь
      slidesPerView: 4,
      spaceBetween: 20,
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
        nextEl: ".catalog-element__slider-slider__next",
        prevEl: ".catalog-element__slider-slider__prev",
      },
    }
  );

  const swiperElement = new Swiper(".gift-element__slider-block__images", {
    slidesPerView: 2.5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".gift-element__slider-btn__next",
      prevEl: ".gift-element__slider-btn__prev",
    },
  });

  // счётчик

  // Получаем все нужные элементы
  const elements = document.querySelectorAll(".element__counter");
  const prices = document.querySelectorAll(".gift-element__price");
  const btnContainers = document.querySelectorAll(".gift-element__counter");

  // Для каждого элемента выполняем одни и те же операции
  elements.forEach((countText, index) => {
    const countTextPrice = prices[index];
    const btns = btnContainers[index].querySelectorAll(".element__btn");

    let counter = 1;
    let price = 2800;
    let priceAdd = 2800;

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        if (event.currentTarget) {
          if (btnIndex === 0 && counter > 1) {
            counter--;
            price = price - priceAdd;
          } else if (btnIndex === 1) {
            counter++;
            price = price + priceAdd;
          }
          countText.textContent = counter;
          countTextPrice.textContent = price;
          setDisabled(counter, btns);
        }
      });
    });

    function setDisabled(count, buttons) {
      if (count === 1) {
        buttons[0].disabled = true;
      } else if (count === 99) {
        buttons[1].disabled = true;
      } else {
        buttons[0].disabled = false;
        buttons[1].disabled = false;
      }
    }
    window.addEventListener("DOMContentLoaded", function () {
      setDisabled(1, btns);
    });
  });

  // выбрать все
  function checkAll() {
    btnInputAll.forEach((checkbox) => {
      if (checkbox !== btnCheckAll) {
        checkbox.checked = btnCheckAll.checked;
      }
    });
  }

  function deleteSelectedAll() {
    btnInputAll.forEach((checkbox) => {
      if (checkbox.checked && checkbox !== btnCheckAll) {
        checkbox.parentElement.remove(); // Удаление родительского элемента, содержащего чекбокс
      }
    });
  }

  if (btnCheckAll) {
    btnCheckAll.addEventListener("click", checkAll);
  }

  // удалить выбранные
  if (deleteSelected) {
    deleteSelected.addEventListener("click", deleteSelectedAll);
  }

  // страница профиля кнопки и инпут дизейбл, и изменяет текст
  if (personalAreaBtn) {
    personalAreaBtn.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.textContent === "Редактировать") {
          btn.textContent = "Сохранить";
          isEditing = false;
          const currentInput = personalAreaInput[index];
          currentInput.disabled = false;
          currentInput.classList.add(
            "popup__form-input",
            "clients__input",
            "auth__input"
          );
        } else {
          btn.textContent = "Редактировать";
          isEditing = true;
          const currentInput = personalAreaInput[index];
          currentInput.disabled = true;
          currentInput.classList.remove(
            "popup__form-input",
            "clients__input",
            "auth__input"
          );
        }
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", ready);
