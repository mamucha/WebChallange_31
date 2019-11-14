$(document).scroll(function () {
    const sectionSkill = $('.l-section--skills');
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();


    if (scrollValue > sectionSkill.offset().top - windowHeight / 2) {

        skill();
    }

})

function skill() {

    $(document).ready(function () {
        $('.c-skill__bar').each(function () {
            jQuery(this).find('.c-skill__bar--bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });


    });


    $('.Count').each(() => {

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