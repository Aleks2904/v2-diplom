document.addEventListener('DOMContentLoaded', function(){
    const url = `../json/partners/partners.json`,
          sliderTrack = document.querySelector('#js-projects-track');

    let imgBase;

    function unloadingImg(){
        return new Promise((resolve, reject) =>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status === 200){
                    const data = xhr.response;
                    imgBase = data;
    
                    for(let i = 0; i < data.length; i++){
                        sliderTrack.innerHTML += 
                            `<li class="swiper-slide projects__swiper-item">
                                <a href="#" class="projects__swiper-link">
                                    <picture>
                                        <source type="image/webp" srcset="${data[i].partnersWebp}">
                                        <img src="${data[i].partners}" alt="${data[i].alt}" class="projects__swiper-img">
                                    </picture>
    
                                    <picture>
                                        <source type="image/webp" srcset="${data[i].partnersColorWebp}">
                                        <img src="${data[i].partnersColor}" alt="${data[i].alt}" class="projects__swiper-img-active">
                                    </picture>
                                </a>
                            </li>`
                    }
                }
                if(xhr.status === 404){
                    sliderTrack.innerHTML = '<h3>бла бла бла</h3>'
                }
            }
            xhr.send(null);

            resolve();
        })
    }

    unloadingImg().then(()=>{
        setTimeout(()=>{
            const li = sliderTrack.querySelectorAll('.projects__swiper-item');

            li.forEach((el)=>{
                const img = el.querySelector('.projects__swiper-img'),
                      width = img.clientWidth,
                      height = img.clientHeight,
                      imgActive = el.querySelector('.projects__swiper-img-active');

                imgActive.style.width = `${width}px`;
                imgActive.style.height = `${height}px`;
    
                console.log('width: '+ width);
                console.log('height: '+ height);
            })
        },4000)
    })
})