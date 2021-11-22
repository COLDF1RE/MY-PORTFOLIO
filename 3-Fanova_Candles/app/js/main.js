$(function () {

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
    });

    $('.collections__slider-inner').slick({
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 700,
        arrows: false,
        fade: true,
        cssEase: 'linear',
    });

})