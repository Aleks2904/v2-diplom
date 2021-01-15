document.addEventListener('DOMContentLoaded', function(){
    const img = [
        {
            jpg: 'img/img/gallery/gallery/img-1.jpg',
            webp: 'img/img/gallery/gallery/img-1.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-2.jpg',
            webp: 'img/img/gallery/gallery/img-2.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-3.jpg',
            webp: 'img/img/gallery/gallery/img-3.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-4.jpg',
            webp: 'img/img/gallery/gallery/img-4.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-5.jpg',
            webp: 'img/img/gallery/gallery/img-5.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-6.jpg',
            webp: 'img/img/gallery/gallery/img-6.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-7.jpg',
            webp: 'img/img/gallery/gallery/img-7.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-8.jpg',
            webp: 'img/img/gallery/gallery/img-8.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-9.jpg',
            webp: 'img/img/gallery/gallery/img-9.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-10.jpg',
            webp: 'img/img/gallery/gallery/img-10.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-11.jpg',
            webp: 'img/img/gallery/gallery/img-11.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-12.jpg',
            webp: 'img/img/gallery/gallery/img-12.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-13.jpg',
            webp: 'img/img/gallery/gallery/img-13.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-14.jpg',
            webp: 'img/img/gallery/gallery/img-14.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-15.jpg',
            webp: 'img/img/gallery/gallery/img-15.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-16.jpg',
            webp: 'img/img/gallery/gallery/img-16.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-17.jpg',
            webp: 'img/img/gallery/gallery/img-17.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-18.jpg',
            webp: 'img/img/gallery/gallery/img-18.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-19.jpg',
            webp: 'img/img/gallery/gallery/img-19.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-20.jpg',
            webp: 'img/img/gallery/gallery/img-20.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-21.jpg',
            webp: 'img/img/gallery/gallery/img-21.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-22.jpg',
            webp: 'img/img/gallery/gallery/img-22.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-23.jpg',
            webp: 'img/img/gallery/gallery/img-23.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-24.jpg',
            webp: 'img/img/gallery/gallery/img-24.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-25.jpg',
            webp: 'img/img/gallery/gallery/img-25.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-26.jpg',
            webp: 'img/img/gallery/gallery/img-26.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-27.jpg',
            webp: 'img/img/gallery/gallery/img-27.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-28.jpg',
            webp: 'img/img/gallery/gallery/img-28.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-29.jpg',
            webp: 'img/img/gallery/gallery/img-29.webp'
        },
        {
            jpg: 'img/img/gallery/gallery/img-30.jpg',
            webp: 'img/img/gallery/gallery/img-30.webp'
        },
    ];

    function slider(slide){
        const returnShablon = `
            <li class="swiper-slide gallery__slider-slids">
                <picture>
                    <source type="image/webp" srcset="${slide.webp}">
                    <img src="${slide.jpg}" alt="${slide.alt}" class="gallery__img">
                </picture>
            </li>
        `

        return returnShablon;
    }
    
    const templates = img.map( img => slider(img));
    const html = templates.join( ' ' );
    
    document.querySelector('#js-gallery-track').innerHTML = html;
})