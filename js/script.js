$(function() {
    $(document).ready(function() {
        //Preloader
        preloaderFadeOutTime = 4000;
        function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
        });
});

    $('.menu__sidebar li a').click(function() {
        $('[for=menu__hamburger]').trigger('click'); 
    });

    (function () {
        var elements;
        var elements_2;
        var windowHeight;

        function init() {
            elements = document.querySelectorAll('.hidden');
            elements_2 = document.querySelectorAll('.hidden2');
            windowHeight = window.innerHeight;
        }

        function checkPosition() {
            for(let i = 0; i <elements.length; i++) {
                let element = elements[i];
                let positionFromTop = elements[i].getBoundingClientRect().top;

                if(positionFromTop - windowHeight <= 0) {
                    element.classList.add('slide_left');
                    element.classList.remove('hidden')
                } else {
                    element.classList.remove('slide_left');
                    element.classList.add('hidden')
                }
            }

            for(let n = 0; n < elements_2.length; n++) {
                let element = elements_2[n];
                let positionFromTop = elements_2[n].getBoundingClientRect().top;

                if(positionFromTop - windowHeight <= 0) {
                    element.classList.add('slide_right');
                    element.classList.remove('hidden2')
                } else {
                    element.classList.remove('slide_right');
                    element.classList.add('hidden2')
                }
            }
        }

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);

        init();
        checkPosition();
    })();

    //  Typing vars and functions
    const typedTextSpan = document.querySelector('.typed_text');
    const cursorSpan = document.querySelector('.cursor');

    const textArray = ['Front-End Developer', 'Back-End Developer','Web designer'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if(charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');

            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if(charIndex > 0) {
            if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.menu__sidebar a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.menu__sidebar').length) {
                    $('.nav-menu .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }
                
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function() {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.menu__sidebar');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function() {
            var top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // back to top button
    $(window).scroll(function () {
        if($(this).scrollTop() > 100) 
            $('.back__to__top').fadeIn('slow');
        else
            $('.back__to__top').fadeOut('slow');
    });

    $('.back__to__top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

//  Dark mode
const nightModeStorege = localStorage.getItem('gmNightMode');
const nightMode = document.querySelector('#night-mode');
const metaThemeColor = document.querySelector('meta[name=theme-color]');

if(nightModeStorege) {
    document.documentElement.classList.add('night-mode');
    metaThemeColor.setAttribute('content', '#2b2b2b');

    nightMode.checked = true;
}

nightMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('night-mode')

    if(document.documentElement.classList.contains('night-mode')) {
        localStorage.setItem('gmNightMode', true);
        metaThemeColor.setAttribute('content', '#2b2b2b');
        return;
    }
    localStorage.removeItem('gmNightMode');
    metaThemeColor.setAttribute('content', '#005f97');
})

// navLinkFade
const navSlide = () => {
    const burger = document.querySelector('[for=menu__hamburger]');
    const nav = document.querySelector('.menu__sidebar ul, .social__medias ul');
    const navLinks = document.querySelectorAll('.menu__sidebar li, .social__medias li');

    burger.addEventListener('click', ()=> {
        // nav.classList.toggle('nav-active');

        if(nav.classList == ''){
            nav.classList.add('nav-active');
        } else {
            nav.classList.remove('nav-active');
        }

        navLinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');
    })

}
navSlide();