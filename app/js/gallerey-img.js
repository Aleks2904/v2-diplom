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
                        `<li class="swiper-slide gallery__slider-item" tabindex="0" data-graph-path="gallerey-${i}">
                            <div class="gallery__container-img" data-graph-path="gallerey-${i}">
                                <picture>
                                    <source type="image/webp" media="(min-width: 768px)" srcset="${data[i].webp}">
                                    <source type="image/webp" media="(max-width: 767px)" srcset="${data[i].webpMobail}">
                                    <source media="(max-width: 767px)" srcset="${data[i].jpgMobail}">
                                    <img id="gallery-img-${i}" src="${data[i].jpg}" alt="${data[i].alt}" class="gallery__img">
                                </picture>
                            </div>
                        </li>`;
                }
            }
            if(xhr.status === 404){
                personBlock.innerHTML= '<h3>бла бла бла</h3>'
            }
        }
    xhr.send(null);


    imgList.addEventListener('click', function(e){
        if(e.target.tagName == 'DIV'){
            const graphAttr = e.target.getAttribute('data-graph-path'),
                  modalContainer = document.querySelector('#js-modal-img-content');
            let imgId = e.target;
            imgId = imgId.querySelector('img');
            imgId = imgId.getAttribute('id');

            modalContainer.setAttribute('data-graph-target', `${graphAttr}`);

            const open = new Promise((resolve, reject)=>{
                    OpenModalImg(imgBase, imgId, e);
                    
                    resolve ();
            });

            open.then(()=>{
                
                    new GraphModal().open(graphAttr);
                
            })
        }
    });

    imgList.addEventListener('keyup', function(e){
        if(e.target.tagName == 'LI' && e.key == 'Enter'){
            let imgId = e.target;
            imgId = imgId.querySelector('img');
            imgId = imgId.getAttribute('id');

            OpenModalImg(imgBase, imgId, e);
        }
    });

})