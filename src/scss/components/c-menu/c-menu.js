const menu = document.querySelector('.l-header');
const menuItem = document.querySelector('.c-menu__item');


document.addEventListener("scroll", () => {

    if (window.pageYOffset >= 300) {
        menu.classList.add('l-header__sticky');
        menuItem.classList.add('c-menu__item--scroll');

    } else {
        menu.classList.remove('l-header__sticky');
        menuItem.classList.remove('c-menu__item--scroll');

    }
})

$('.c-menu__link').on('click', function () {
    const goToSection = $(this).attr('href');

    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - $(window).height() / 4
    }, '3000');
})


const navSlide = () => {
    const burger = document.querySelector('.c-menu__burger');
    const list = document.querySelector('.c-menu__list');
    const item = document.querySelectorAll('.c-menu__item');

    // toggle nav
    burger.addEventListener('click', function () {

        list.classList.toggle('c-menu__list--open');

        //animate links
        // item.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `navLinkFade .5s ease forwards ${index / 7+0.5}s`;
        //     }

        // });


        //burger animated
        burger.classList.toggle('c-menu__burger--open');

    });


    list.addEventListener('click', function () {
        list.classList.toggle('c-menu__list--open');
        burger.classList.toggle('c-menu__burger--open');

    })

}

navSlide();