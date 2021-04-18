document.addEventListener('DOMContentLoaded', function(){
    const linkFlags = document.querySelectorAll('.catalog__flags-link'),
          catalogData = document.querySelector('#js-catalog-data-list'),
          personBlock = document.querySelector('#js-catalog-individual-block'),
          allPerson = document.querySelector('#js-catalog-full-info');
    let flagsObg;

    //добавления списка персон и описания при загрузки страницы

    linkFlags.forEach(function(link){
        let flags = link.getAttribute('href');
            flags = flags.substring(1);
        let bg = `img/svg/flags/${flags}.svg`;
        link.style.backgroundImage = `url('${bg}')`;

        link.addEventListener('click', function(e){
            e.preventDefault();

            allPerson.classList.remove('catalog__person-block_is-leafing');
            setTimeout(()=>{
                allPerson.classList.add('catalog__person-block_is-leafing');
            },1);

            setTimeout(()=>{    
                linkFlags.forEach(function(ele){
                    ele.classList.remove('catalog__flags-link_is-active');
                })
        
                link.classList.add('catalog__flags-link_is-active');

                addPerson(link);
            }, 501);
        });

        if(link.classList.contains('catalog__flags-link_is-active')){
            addPerson(link);
        }
    })

    //добавления описание персоны при клике
        
    catalogData.addEventListener('click', function(e){
        const target = e.target;

        if(target.tagName === 'A'){
            const allLinks = catalogData.querySelectorAll('.catalog__data-link');

            allLinks.forEach(function(elem){
                elem.classList.remove('catalog__data-link_is-active');
                elem.parentElement.parentElement.parentElement.classList.remove('catalog__data-item_link-is-active');
                elem.parentElement.parentElement.classList.remove('catalog__data-list-link_link-is-active');
            })

            const links = e.target;
            const btn = links.parentElement.parentElement.parentElement.querySelector('.catalog__data-btn');

            e.preventDefault();
            addInfoPerson(links);
            btnClick(btn);
        }
    })

    //функция добавления списка персон (и персоны при загрузки страницы)

    function addPerson(link){
        catalogData.innerHTML = ``;
        personBlock.innerHTML = ``;

        let flags = link.getAttribute('href');
            flags = flags.substring(1);
        const url = `../json/catalog/${flags}.json`;

        let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status === 200){
                    const data = xhr.response[0];
                    flagsObg = data;
                    let key = Object.keys(data);
                    key = key.sort();

                    //добавление годов и персон в лист персон

                    for(let i = 0; i < key.length; i++){
                        let year = key[i], //года
                            persons = data[year],
                            peronsKey = Object.keys(persons),
                            ariaControls = Math.random(),
                            ariaLabelledby = Math.random(),
                            re = /\s*-\s*/,
                            yearBtnStr = year + '';

                        yearBtnStr = yearBtnStr.split(re);

                        let yearBtn;

                        if(yearBtnStr.length > 1){
                            yearBtn = `С ${yearBtnStr[0]} по ${yearBtnStr[1]} гг.`;
                        }else{
                            yearBtn = `С ${yearBtnStr[0]} г.`;
                        }
                            
                        catalogData.innerHTML += `
                            <li class="catalog__data-item">
                                <div class="catalog__data-container">
                                    <button
                                        id="al-${ariaLabelledby}" 
                                        aria-label="показать/скрыть дату" 
                                        aria-controls="ac-${ariaControls}" 
                                        aria-expanded="false" 
                                        type="button" 
                                        class="catalog__data-btn"
                                        value="${year}">
                                            ${yearBtn}
                                    </button>

                                    <ul
                                        id="ac-${ariaControls}" 
                                        aria-labelledby="al-${ariaLabelledby}" 
                                        class="catalog__data-list-link"
                                        >
                                    </ul>
                                </div>
                            </li>
                        `

                        for(let k = 0; k < peronsKey.length; k++){
                            let person = peronsKey[k], // имя персоны
                                infoPersons = persons[person],
                                infoPersonKey = Object.keys(infoPersons);

                                let item = document.querySelectorAll('.catalog__data-item');

                                item.forEach(function(el){
                                    const btn = el.querySelector('.catalog__data-btn'),
                                          valueBtn = btn.value,
                                          linkList = el.querySelector('.catalog__data-list-link');
                                    
                                    if(valueBtn ==  year){
                                        linkList.innerHTML += `
                                            <li class="catalog__data-item-link">
                                                <a href="${flags+"/"+key[i]+"/"+peronsKey[k]}" class="catalog__data-link">
                                                    ${person}
                                                </a>
                                            </li>
                                        `
                                    }
                                })
                            }
                    }

                    //добавление описания персоны при загрузки страницы

                    const linkPerson = catalogData.querySelectorAll('.catalog__data-link');
                    let linkActiv;
        
                    linkPerson.forEach(function(item){
                        if(!item.classList.contains('catalog__data-list-link_is-active')){
                            linkActiv = true;
                        }else{
                            linkActiv = false;
                        }
                    })
        
                    if(linkActiv){
                        const links = catalogData.querySelector('.catalog__data-link');
                        addInfoPerson(links);
                    }

                    //клик по кнопке

                    const catalogBtn = catalogData.querySelectorAll('.catalog__data-btn');

                    catalogBtn.forEach(function(elem){
                        elem.addEventListener('click', function(){
                            btnClick(elem)
                        })
                    })
                }
                if(xhr.status === 404){
                    personBlock.innerHTML= '<h3>бла бла бла</h3>'
                }
            }
        xhr.send(null);
    }

    //функция добавления описание персоны

    function addInfoPerson(links){
            const btn = links.parentElement.parentElement.parentElement.querySelector('.catalog__data-btn'),
                  btnParent = btn.parentElement,
                  linkList = links.parentElement.parentElement;
            let attr = links.getAttribute('href');
                attr = attr.split('/');
            
            links.classList.add('catalog__data-link_is-active');
            btnParent.classList.add('catalog__data-item_link-is-active');
            btnParent.querySelector('.catalog__data-list-link').classList.add('catalog__data-list-link_link-is-active');
            btnParent.classList.add('catalog__data-item_is-active');

            btn.setAttribute('aria-expanded','true');
            btn.classList.add('catalog__data-btn_is-active');
            linkList.classList.add('catalog__data-list-link_is-active');

            const year = attr[1],
                  person = attr[2],
                  obgYear = flagsObg[year],
                  obgPerson = obgYear[person],
                  imgPerson = obgPerson.image,
                  namePerson = obgPerson.name,
                  dataPerson = obgPerson.date,
                  discPersont = obgPerson.description;

            personBlock.innerHTML = `
                <picture>
                    <source type="image/webp" srcset="${imgPerson}.webp">
                    <img src="${imgPerson}.jpg" alt="${namePerson}" class="catalog__individual-img">
                </picture>

                <h3 class="catalog__individual-title">${namePerson}</h3>
    
                <time class="catalog__individual-data">${dataPerson}</time>

                <p class="catalog__individual-subtitle">${discPersont}</p>
            `;
    }

    //функция клик по кнопки каталога

    function btnClick(btn){
        const catalogBtn = catalogData.querySelectorAll('.catalog__data-btn'),
              btnParent = btn.parentElement,
              attr = btn.getAttribute('aria-expanded');

        catalogBtn.forEach(function(el){
            const links = el.parentElement.querySelector('.catalog__data-list-link').children;
            let noLinksActiv,
                activList;

            for(let i = 0; i< links.length; i++){
                let link = links[i];
                link = link.querySelector('.catalog__data-link');

                if(el.parentElement.classList.contains('catalog__data-item_is-active')){
                    activList = true;
                }

                if(link.classList.contains('catalog__data-link_is-active')){
                    noLinksActiv = false;
                    break;
                }else{
                    noLinksActiv = true;
                }
            }

            if(noLinksActiv && activList){
                el.parentElement.querySelector('.catalog__data-list-link').classList.remove('catalog__data-list-link_is-active');
                el.parentElement.querySelector('.catalog__data-list-link').classList.add('catalog__data-list-link_is-off');
                setTimeout(()=>{
                    el.parentElement.querySelector('.catalog__data-list-link').classList.remove('catalog__data-list-link_is-off');
                },500)
                el.setAttribute('aria-expanded', 'false');
                el.classList.remove('catalog__data-btn_is-active');
                el.parentElement.classList.remove('catalog__data-item_is-active');
                el.parentElement.classList.add('catalog__data-item_is-off');
            }
        })

        const links = btnParent.querySelector('.catalog__data-list-link').children;
        let noLinksActiv;

            for(let i = 0; i< links.length; i++){
                if(links[i].querySelector('.catalog__data-link').classList.contains('catalog__data-link_is-active')){
                    noLinksActiv = false;
                    break;
                }else{
                    noLinksActiv = true;
                }
            }

        if(attr == 'true' && noLinksActiv){
            btnParent.querySelector('.catalog__data-list-link').classList.remove('catalog__data-list-link_is-active');
            btnParent.querySelector('.catalog__data-list-link').classList.add('catalog__data-list-link_is-off');
            setTimeout(()=>{
                btnParent.querySelector('.catalog__data-list-link').classList.remove('catalog__data-list-link_is-off');
            },500)
            btn.setAttribute('aria-expanded', 'false');
            btn.classList.remove('catalog__data-btn_is-active');
            btnParent.classList.remove('catalog__data-item_is-active');
            btnParent.classList.add('catalog__data-item_is-off');
        }else{
            btn.setAttribute('aria-expanded', 'true');
            btn.classList.add('catalog__data-btn_is-active');
            btnParent.querySelector('.catalog__data-list-link').classList.add('catalog__data-list-link_is-active');
            btnParent.querySelector('.catalog__data-list-link').classList.remove('catalog__data-list-link_is-off');
            btnParent.classList.add('catalog__data-item_is-active');
            btnParent.classList.remove('catalog__data-item_is-off');
        }
    }
})
