$(function () {

    $('.cottages').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="cottages-card__arrow-prev cottages-card__arrow"></button>',
        nextArrow: '<button type="button" class="cottages-card__arrow-next cottages-card__arrow"></button>',
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

})