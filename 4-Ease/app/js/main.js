$(function () {

    $('.info__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close')
    })
    $('.rightside-menu__close').on('click', closeMenu)
    $('.rightside-menu__list-link').on('click', closeMenu)

    function closeMenu() {
        $('.rightside-menu').addClass('rightside-menu--close')
    }

})