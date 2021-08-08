"use strict";

document.querySelector('.header__menu__hamburger').addEventListener('click', function () {
  return document.querySelector('.container__principal').classList.toggle('header__menu__show');
});