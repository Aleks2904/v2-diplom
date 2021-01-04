document.addEventListener('DOMContentLoaded', function(){ 
    const supportWebp =()=> {
        const elem = document.createElement('canvas');
        return elem.getContext && elem.getContext('2d') ?
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0 :
            false;
    }
    const result = supportWebp();

    //block about-us
    const aboutUs = document.querySelector('.about-us__info-baner');

    if(result == true){
        aboutUs.classList.add('about-us__info-baner-img-webp');
    }else{
        aboutUs.classList.add('about-us__info-baner-img');
    };

    //block working

    const slideList = document.querySelector('#js-working-slide-list').children;

    for(let i = 0; i < slideList.length; i++){
        const id = slideList[i].id;

        const item = document.querySelector(`#${id}`),
              imgContainer = item.querySelector('.working__info-img');
        let img;

        if(result == true){
            img = `img/block-working/${id}.webp`
        }else{
            img = `img/block-working/${id}.jpeg`
        }

        imgContainer.style.backgroundImage = `url(${img})`;
    }
});