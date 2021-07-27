$(function () {
    $('.reviews-slider').slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-prev"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-next"></button>'
    });
});
new Swiper('.image-slider', {
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
});
