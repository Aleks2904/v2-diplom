document.addEventListener('DOMContentLoaded', function(){
    let heroBlockSwiper,
        galleryBlockSwiper,
        eventBlockSwiper,
        edition,
        partners;
    
    const startSwiperEventsBlcolock = 768;

    function setHeroBlockSwiper(){
        heroBlockSwiper = new Swiper('#js-swiper-hero', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            speed: 600,
            observer: true,
            observeParents: true,
            observeSlideChildren: true
        });
    }

    function setGalleryBlockSwiper(){
        galleryBlockSwiper = new Swiper('#js-gallery-slider',{
            navigation: {
                nextEl: '.gallery__swiper-button-next',
                prevEl: '.gallery__swiper-button-prev',
            },
            pagination:{
                el: '.gallery__swiper-fraction',
                type: 'fraction'
            },
            breakpoints: {
                0:{
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 0,
                },

                768:{
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    spaceBetween: 34,
                },
    
                1400:{
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 50,
                    
                },
            },
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            
        })
    }

    function setEventBlockSwiper(){
        const width = window.screen.width;
        if(width < startSwiperEventsBlcolock){
            eventBlockSwiper = new Swiper ('#js-event-block-swiper',{
                pagination:{
                    el: '.events__swiper-pagination',
                    clickable: true,
                },
                effect: 'flip',
                flipEffect:{
                    slideShadows: true,
                    limitRotation: true
                },
                slidesPerView: 1,
                slidesPerColumn: 1,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                autoHight: true,
            });
        }else{
            eventBlockSwiper = null;
        }
    }

    function setEditionBlockSwiper(){
        const width = window.screen.width;
        if(width >= startSwiperEventsBlcolock){
            edition = new Swiper('#js-editions-slider',{
                navigation: {
                    nextEl: '.editions__swiper-button-next',
                    prevEl: '.editions__swiper-button-prev',
                },
                pagination:{
                    el: '.editions__swiper-fraction',
                    type: 'fraction'
                },
                breakpoints: {
                    768:{
                        slidesPerView: 2,
                        spaceBetween: 34,
                    },

                    1024:{
                        slidesPerView: 2,
                        spaceBetween: 49,
                    },
        
                    1400:{
                        slidesPerView: 3,
                        spaceBetween: 50,
                        
                    },
        
                },
                slidesPerColumn: 1,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                
            })
        }else{
            edition = null;
        }
    }

    function setProjectsBlockSwiper(){
        partners = new Swiper('#js-projects-slider',{
            navigation: {
                nextEl: '.projects__swiper-button-next',
                prevEl: '.projects__swiper-button-prev',
            },
            breakpoints: {
                320:{
                    slidesPerView: 1,
                },
                
                768:{
                    slidesPerView: 2,
                    spaceBetween: 34,
                },

                1024:{
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
    
                1400:{
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
    
            },
            slidesPerColumn: 1,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
        });
    }

    window.onresize = function() {
        setHeroBlockSwiper();
        setGalleryBlockSwiper();
        setEventBlockSwiper();
        setEditionBlockSwiper();
        setProjectsBlockSwiper();
    };

    setHeroBlockSwiper();
    setGalleryBlockSwiper();
    setEventBlockSwiper();
    setEditionBlockSwiper();
    setProjectsBlockSwiper();
})
