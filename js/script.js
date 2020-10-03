$('.menu__sidebar li a').click(function() {
    $('#menu__hamburger').trigger('click'); 
});

window.onscroll = function() {
    headerFixed();
}

var header = document.querySelector('#header__desktop');
var links2 = document.querySelectorAll('nav ul a');
var fixed = header.offsetTop;

function headerFixed() {
    if(window.pageYOffset > fixed) {
        header.classList.add('header__menu__fixed');
    } else {
        header.classList.remove('header__menu__fixed');
    }
}

const marker = document.querySelector('#marker');
const marker2 = document.querySelector('#marker-2');
const item = document.querySelectorAll('.header__menu__desktop ul li a');
const item2 = document.querySelectorAll('.header__menu__mobile ul li a');

function indicator(e) {
    marker.style.left = e.offsetLeft+'px';
    marker.style.width = e.offsetWidth+'px';
}

function indicatorMobile(e) {
    marker2.style.top = e.offsetTop+'px';
    marker2.style.width = e.offsetWidth+'px';
}

item.forEach(Link => {
    Link.addEventListener('mousemove', (e) => {
        indicator(e.target);
    })
})

item2.forEach(Link => {
    Link.addEventListener('mousemove',(e) => {
        indicatorMobile(e.target);
    })
})

const links = document.querySelectorAll("#header__desktop ul  a.nav__link");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        elements2 = document.querySelectorAll('.hidden2');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for(var i = 0; i <elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if(positionFromTop - windowHeight <= 0) {
                element.classList.add('slide-left-element');
                element
                element.classList.remove('hidden')
            } else {
                element.classList.remove('slide-left-element');
                element.classList.add('hidden')
            }
        }
        for(var n = 0; n <elements2.length; n++) {
            var element = elements2[n];
            var positionFromTop = elements2[n].getBoundingClientRect().top;

            if(positionFromTop - windowHeight <= 0) {
                element.classList.add('slide-right-element');
                element
                element.classList.remove('hidden2')
            } else {
                element.classList.remove('slide-right-element');
                element.classList.add('hidden2')
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();