document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#js-events__list'),
          btn = document.querySelector('#js-all-events-btn');
    let minStroke;

    function setMinStroke(){
        const width = document.body.clientWidth;

        if(width > 1023){
            minStroke = 7;
        }
        if(width > 767 && width < 1024){
            minStroke = 5;
        }
        if(width < 768){
            minStroke = 6;
        }
    }

    btn.addEventListener('click',function(e){
        const attr = e.target.getAttribute('aria-expanded');
        addPerson(attr)
    });

    list.addEventListener('click', function(e){
        const width = document.body.clientWidth;
        if(e.target.classList.contains('events__item-btn') && width < 1400){
            const btn = e.target,
                  text = btn.parentElement.querySelector('.events__item-subtitle'),
                  stringsMin = `'${minStroke}'`,
                  strings = window.getComputedStyle(text).webkitLineClamp;

            if(strings == 'none'){
                text.style.webkitLineClamp = stringsMin;
                btn.textContent = 'Подробнее';
            }else{
                text.style.webkitLineClamp = 'inherit';
                btn.textContent = 'Скрыть';
            }
        }
    })

    window.addEventListener("resize", (event) => {
        setMinStroke();
        disableBtn();
        addPerson();

        document.location.reload();
    })

    function disableBtn(){
        const container = document.querySelectorAll('.events__item-container');

        container.forEach(function(el){
            const text = el.querySelector('.events__item-subtitle'),
                  btn = el.querySelector('.events__item-btn'),
                  textStatus = text.style.webkitLineClamp,
                  width = document.body.clientWidth;

            if(width >= 1400){
                btn.textContent = 'Подробнее';
                btn.classList.add('events__item-btn_disable');
            }else{
                text.style.webkitLineClamp = 'inherit';

                let elH = text.clientHeight,
                    txtH = window.getComputedStyle(text).lineHeight;

                text.style.webkitLineClamp = textStatus;
                txtH = txtH.replace(/[a-zа-яё]/gi, '');


                const stroke = elH/txtH;
                
                if(stroke <= minStroke){
                    btn.textContent = 'Подробнее';
                    btn.classList.add('events__item-btn_disable');
                }
                if(stroke > minStroke){
                    btn.classList.remove('events__item-btn_disable');
                }
            }
        })
    }

    function addPerson(attr){
        list.innerHTML = ``;

        const url = `../json/events/evens-item.json`;

        let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status === 200){
                    const data = xhr.response,
                          width = document.body.clientWidth;
                    let forLength;

                    if(attr == 'false'){
                        btn.setAttribute('aria-expanded', 'true');
                        btn.textContent = 'скрыть все события';
                        forLength = data.length;
                    }else{
                        btn.setAttribute('aria-expanded', 'false');
                        btn.textContent = 'все события';
                        document.location.href = '#events';

                        if(width > 1023){
                            forLength = 3;
                        }
                        if(width > 767 && width < 1024){
                            forLength = 2;
                        }
                        if(width < 768){
                            forLength = data.length;
                        }
                    }

                    for(let i = 0; i < forLength; i++){
                        list.innerHTML += `
                            <li class="swiper-slide events__item">
                                <figure class="events__slide-figure">
                                    <picture>
                                        <source type="image/webp" srcset="${data[i].webp}">
                                        <img src="${data[i].img}" alt="картинка 1" class="events__item-img">
                                    </picture>

                                    <figcaption class="events__slide-figcaption">
                                        <span class="events__item-site">
                                            ${data[i].site}
                                        </span>

                                        <time class="events__item-time" datetime="${data[i].data}">
                                            ${data[i].data}
                                        </time>
                                    </figcaption>
                                </figure>

                                <div class="events__item-container">                              
                                    <h3 class="events__item-title">
                                        ${data[i].title}
                                    </h3>

                                    <div class="events__item-contianer-subtitle">
                                        <p class="events__item-subtitle">
                                            ${data[i].subtitle}
                                        </p>
                                    </div>

                                    <button class="events__item-btn">
                                        ${data[i].btn}
                                    </button>
                                </div>
                            </li>
                        `
                    }

                    disableBtn();
                }
                if(xhr.status === 404){
                    personBlock.innerHTML= '<h3>бла бла бла</h3>'
                }
            }
        xhr.send(null);
    };

    setMinStroke();
    addPerson();
})