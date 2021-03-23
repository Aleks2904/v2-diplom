document.addEventListener('DOMContentLoaded', function(){
    const url = `../json/editions/editions.json`,
          sliderTrack = document.querySelector('#js-editions-track'),
          sliderContainer = document.querySelector('#js-editions-slider');

    let imgBase;

    let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status === 200){
                const data = xhr.response;
                imgBase = data;

                for(let i = 0; i < data.length; i++){
                    sliderTrack.innerHTML += 
                        `<li class="swiper-slide editions__swiper-slid">
                            <div class="editions__swiper-slid-container">
                                <figure class="editions__slide-figure"> 
                                    <picture>
                                        <source type="image/webp" srcset="${data[i].webp}">
                                        <img src="${data[i].jpg}" alt="${data[i].alt}" class="editions__slide-img">
                                    </picture>
                                
                                    <figcaption class="editions__slide-figcaption">
                                        <span class="editions__slide-disc">
                                            ${data[i].disc}
                                        </span>

                                        <span class="editions__slide-price">
                                            ${data[i].price}
                                        </span>

                                        <span class="editions__slide-disc">
                                            ${data[i].author}
                                        </span>
                                    </figcaption>
                                </figure>

                                <button class="editions__slide-btn">
                                    Заказать
                                </button>
                            </div>
                        </li>`
                }
            }
            if(xhr.status === 404){
                sliderContainer.innerHTML = '<h3>бла бла бла</h3>'
            }
        }
    xhr.send(null);
})