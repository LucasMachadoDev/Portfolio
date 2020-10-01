"use strict";

window.onscroll = function () {
  headerFixed();
};

var header = document.querySelector('#header__desktop');
var fixed = header.offsetTop;

function headerFixed() {
  if (window.pageYOffset > fixed) {
    header.classList.add('header__menu__fixed');
  } else {
    header.classList.remove('header__menu__fixed');
  }
}

(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      } else {
        element.classList.remove('fade-in-element');
        element.classList.add('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);
  init();
  checkPosition();
})();

var marker = document.querySelector('#marker');
var marker2 = document.querySelector('#marker-2');
var item = document.querySelectorAll('.header__menu__desktop ul li a');
var item2 = document.querySelectorAll('.header__menu__mobile ul li a');

function indicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

function indicatorMobile(e) {
  marker2.style.top = e.offsetTop + 'px';
  marker2.style.width = e.offsetWidth + 'px';
}

item.forEach(function (Link) {
  Link.addEventListener('mousemove', function (e) {
    indicator(e.target);
  });
});
item2.forEach(function (Link) {
  Link.addEventListener('mousemove', function (e) {
    indicatorMobile(e.target);
  });
});