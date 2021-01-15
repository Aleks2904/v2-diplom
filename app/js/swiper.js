document.addEventListener('DOMContentLoaded', function(){
    const heroBlockSwiper = new Swiper('#js-swiper-hero', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 600,
        observer: true,
        observeParents: true,
        observeSlideChildren: true
    });

    const galleryBlockSwiper = new Swiper('#js-gallery-slider',{
        navigation: {
            nextEl: '.gallery__swiper-button-next',
            prevEl: '.gallery__swiper-button-prev',
        },
        pagination:{
            el: '.gallery__swiper-fraction',
            type: 'fraction'
        },
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
        observer: true,
        observeParents: true,
        observeSlideChildren: true
        
    })
})
