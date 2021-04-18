document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('#js-events__list'),
          btn = document.querySelector('#js-all-events-btn');

    let width = window.innerWidth;

    btn.addEventListener('click',function(e){
        const attr = e.target.getAttribute('aria-expanded');
        addPerson(attr);

        if(attr == 'true'){
            document.location.href = '#events';
        }
    });

    list.addEventListener('click', function(e){
        const width = document.body.clientWidth;

        if(e.target.classList.contains('events__item-btn')){
            const btn = e.target,
                  parent = btn.parentElement,
                  textContainer = parent.querySelector('.events__item-contianer-subtitle'),
                  text = parent.querySelector('.events__item-subtitle'),
                  ariaExpanded = btn.getAttribute('aria-expanded');

            if(ariaExpanded == 'true'){
                welshBtn(text, textContainer, btn, width);
                btn.textContent = 'Подробнее';
            }else{
                text.style.webkitLineClamp = 'inherit';
                btn.textContent = 'Скрыть';
                btn.setAttribute('aria-expanded', 'true');
            }
        }
    })

    window.addEventListener("resize", (event) => {
        disableBtn();
        addPerson();

        locationReload();
    })

    function disableBtn(){
        const  list = document.querySelector('.events__list'),
               item = list.querySelectorAll('.events__item');

        item.forEach(function(el){
            const text = el.querySelector('.events__item-subtitle'),
                    textContainer = el.querySelector('.events__item-contianer-subtitle'),
                    btn = el.querySelector('.events__item-btn'),
                    width = document.body.clientWidth;

                welshBtn(text, textContainer, btn, width)
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
                        btn.textContent = 'Скрыть все события';
                        forLength = data.length;
                    }else{
                        btn.setAttribute('aria-expanded', 'false');
                        btn.textContent = 'Все события';

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

    function locationReload(){
        const locationWidth = window.innerWidth;

        if(width >= 1400){
            if(locationWidth < 1400){
                reload();
            }
        }

        if(width < 1400 && width >= 1024){
            if(locationWidth >= 1400){
                reload();
            }
            if(locationWidth < 1024){
                reload();
            }
        }

        if(width < 1024 && width >=768){
            if(locationWidth >= 1024){
                reload();
            }

            if(locationWidth < 768){
                reload();
            }
        }

        if(width < 768){
            if(locationWidth >= 768){
                reload();
            }
        }

        function reload(){
            width = window.innerWidth;

            const scrollTop = window.pageYOffset;

            document.location.reload();

            wwindow.scrollBy(0, scrollTop);
            console.log(scrollTop)
        }
    };

    function welshBtn(text, textContainer, btn, width){
        // if(width >= 1400){
        //     btn.textContent = 'Подробнее';
        //     btn.setAttribute("disabled", "disabled");
        //     btn.classList.add('events__item-btn_disable');

        //     btn.removeAttribute('aria-expanded');
        //     btn.removeAttribute('id');
        //     btn.removeAttribute('aria-controls');

        //     text.removeAttribute('id');
        //     text.removeAttribute('aria-labelledby');
        // }else{
            text.style.webkitLineClamp = '1';

            let elH = textContainer.clientHeight,
                txtH = window.getComputedStyle(text).lineHeight;

            txtH = txtH.replace(/[a-zа-яё]/gi, '');

            const saveStroke = 1,
                  stroke = Math.floor((elH / txtH)),
                  clamp = stroke -  saveStroke;

            text.style.webkitLineClamp = 'inherit';

            let fullStroke = text.clientHeight;
                fullStroke = Math.floor((fullStroke / txtH));

            textContainer.setAttribute('data-simplebar', 'init');
            
            if(clamp >= fullStroke){
                btn.textContent = 'Подробнее';
                btn.classList.add('events__item-btn_disable');

                btn.removeAttribute('aria-expanded');
                btn.removeAttribute('id');
                btn.removeAttribute('aria-controls');

                text.removeAttribute('id');
                text.removeAttribute('aria-labelledby');

                btn.setAttribute("disabled", "disabled");
            }

            if(clamp < fullStroke){
                const idBtn = 'btn-'+ Math.random(),
                      idText = 'text-' + Math.random();

                btn.classList.remove('events__item-btn_disable');
                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('id', idBtn);
                btn.setAttribute('aria-controls', idText);

                text.setAttribute('id', idText);
                text.setAttribute('aria-labelledby', idBtn);

                btn.removeAttribute("disabled");

                text.style.webkitLineClamp = clamp;
                textContainer.style.maxHeight = `${elH}px`;

                new SimpleBar(textContainer);
            }
        // }
    }

    addPerson();
})