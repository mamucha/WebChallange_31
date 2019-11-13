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