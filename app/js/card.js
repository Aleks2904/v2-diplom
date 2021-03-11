document.addEventListener('DOMContentLoaded', function(){
    ymaps.ready(init);

    function init(){
        const card = new ymaps.Map("js-contacts-card-block", {
            center: [55.75446196, 37.60309677],
            zoom: 14,
            controls: ['zoomControl']
        });
        
        const marks = new ymaps.Placemark([55.76008422997253,37.601079499999905],{
            hintContent: "<strong>Шоурум №4</strong>",
            balloonContent: "<strong>Шоурум №4</strong> Леонтьевский переулок, дом 5, строение 1"
        },{
            iconLayout: 'default#image',
            iconImageHref: '../img/svg/card-metka.svg',
            iconImageSize: [20,20]
        
        });

        card.geoObjects.add(marks);
    }    
})
