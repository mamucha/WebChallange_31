function skill() {

    $(document).ready(function () {
        $('.c-skill__bar').each(function () {
            jQuery(this).find('.c-skill__bar--bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });

    });


    $('.Count').each(function () {

        var $this = $(this);


        $({
            Counter: 0
        }).animate({
            Counter: $this.text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });

}



function progressbaring() {
    const sectionSkill = $('.l-section--skills');
    const windowHeight = $(window).height();
    if (window.pageYOffset > sectionSkill.offset().top - windowHeight - 100) {
        skill();
        window.removeEventListener('scroll', progressbaring);
    }
}

window.addEventListener('scroll', progressbaring);