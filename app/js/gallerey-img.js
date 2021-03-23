document.addEventListener('DOMContentLoaded', function(){
    const url = `../json/gallery/gallery.json`,
          imgList = document.querySelector('#js-gallery-track');

    let imgBase;

    let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status === 200){
                const data = xhr.response;
                imgBase = data;

                for(let i = 0; i < data.length; i++){

                    imgList.innerHTML += 
                        `<li class="swiper-slide gallery__slider-item">
                            <div class="gallery__container-img" tabindex="0">
                                <picture>
                                    <source type="image/webp" media="(min-width: 768px)" srcset="${data[i].webp}">
                                    <source type="image/webp" media="(max-width: 767px)" srcset="${data[i].webpMobail}">
                                    <source media="(max-width: 767px)" srcset="${data[i].jpgMobail}">
                                    <img id="gallery-img-${i}" src="${data[i].jpg}" alt="${data[i].alt}" class="gallery__img">
                                </picture>
                            </div>
                        </li>`;
                }

                installationHeightImgContainer();
            }
            if(xhr.status === 404){
                personBlock.innerHTML= '<h3>бла бла бла</h3>'
            }
        }
    xhr.send(null);


    imgList.addEventListener('click', function(e){
        if(e.target.tagName == 'DIV'){
            let imgId = e.target;
            imgId = imgId.querySelector('img');
            imgId = imgId.getAttribute('id');

            OpenModalImg(imgBase, imgId);
        }
    });

    imgList.addEventListener('keyup', function(e){
        if(e.target.tagName == 'DIV' && e.key == 'Enter'){
            let imgId = e.target;
            imgId = imgId.querySelector('img');
            imgId = imgId.getAttribute('id');

            OpenModalImg(imgBase, imgId);
        }
    });

    function installationHeightImgContainer(){
        const itemHeight = imgList.querySelector('.gallery__slider-item').clientHeight,
              borderHeight = 3,
              containerHeight = itemHeight - (borderHeight * 2),
              imgContainer = imgList.querySelectorAll('.gallery__container-img');

        imgContainer.forEach((el)=>{
            el.style.height = `${containerHeight}px`
        })
    }
})