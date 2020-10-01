window.onscroll = function() {
    headerFixed();
}

var header = document.querySelector('#header__desktop');
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