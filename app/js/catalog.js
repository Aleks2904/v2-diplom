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

            linkFlags.forEach(function(ele){
                ele.classList.remove('catalog__flags-link_is-active');
            })
    
            link.classList.add('catalog__flags-link_is-active');

            addPerson(link);
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
            })

            const links = e.target;
            const btn = links.parentElement.parentElement.querySelector('.catalog__data-btn');

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
        const url = `../json/${flags}.json`;

        let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status === 200){
                    const data = xhr.response[0];
                    flagsObg = data;
                    let key = Object.keys(data);

                    //добавление годов и персон в лист персон

                    for(let i = 0; i < key.length; i++){
                        let year = key[i], //года
                            persons = data[year],
                            peronsKey = Object.keys(persons),
                            ariaControls = Math.random(),
                            ariaLabelledby = Math.random();

                            catalogData.innerHTML += `
                                <li class="catalog__data-item">
                                    <button
                                        id="al-${ariaLabelledby}" 
                                        aria-label="показать/скрыть дату" 
                                        aria-controls="ac-${ariaControls}" 
                                        aria-expanded="false" 
                                        type="button" 
                                        class="catalog__data-btn">
                                            ${year}
                                    </button>

                                    <div 
                                        id="ac-${ariaControls}" 
                                        aria-labelledby="al-${ariaLabelledby}" 
                                        class="catalog__data-container-link">
                                    </div>
                                </li>
                            `

                        for(let k = 0; k < peronsKey.length; k++){
                            let person = peronsKey[k], // имя персоны
                                infoPersons = persons[person],
                                infoPersonKey = Object.keys(infoPersons);

                                let item = document.querySelectorAll('.catalog__data-item');

                                item.forEach(function(el){
                                    const btn = el.querySelector('.catalog__data-btn').textContent.replace(/\s/g, ''),
                                        linkContainer = el.querySelector('.catalog__data-container-link');
                                    
                                    if(btn ==  year){
                                        linkContainer.innerHTML += `
                                            <a href="${flags+"/"+key[i]+"/"+peronsKey[k]}" class="catalog__data-link">
                                                ${person}
                                            </a>
                                        `
                                    }
                                })
                            }
                    }

                    //добавление описания персоны при загрузки страницы

                    const linkPerson = catalogData.querySelectorAll('.catalog__data-link');
                    let linkActiv;
        
                    linkPerson.forEach(function(item){
                        if(!item.classList.contains('catalog__data-link catalog__data-container-link_is-active')){
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
            const btn = links.parentElement.parentElement.querySelector('.catalog__data-btn'),
                  linkContainer = links.parentElement.parentElement.querySelector('.catalog__data-container-link');
            let attr = links.getAttribute('href');
                attr = attr.split('/');
            
            links.classList.add('catalog__data-link_is-active');

            btn.setAttribute('aria-expanded','true');
            linkContainer.classList.add('catalog__data-container-link_is-active');

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

                <h3 class="catalog__individual-btn">${namePerson}</h3>
    
                <time class="catalog__individual-data">${dataPerson}</time>

                <p class="catalog__individual-subbtn">${discPersont}</p>
            `;
    }

    //функция клик по кнопки каталога

    function btnClick(btn){
        const catalogBtn = catalogData.querySelectorAll('.catalog__data-btn');
        const attr = btn.getAttribute('aria-expanded');

        catalogBtn.forEach(function(el){
            const links = el.parentElement.querySelector('.catalog__data-container-link').children;
            let noLinksActiv;
            for(let i = 0; i< links.length; i++){
                if(links[i].classList.contains('catalog__data-link_is-active')){
                    noLinksActiv = false;
                    break;
                }else{
                    noLinksActiv = true;
                }
            }

            if(noLinksActiv){
                el.parentElement.querySelector('.catalog__data-container-link').classList.remove('catalog__data-container-link_is-active');
                el.setAttribute('aria-expanded', 'false');
            }
        })

        const links = btn.parentElement.querySelector('.catalog__data-container-link').children;
        let noLinksActiv

            for(let i = 0; i< links.length; i++){
                if(links[i].classList.contains('catalog__data-link_is-active')){
                    noLinksActiv = false;
                    break;
                }else{
                    noLinksActiv = true;
                }
            }

        if(attr == 'true' && noLinksActiv){
            btn.parentElement.querySelector('.catalog__data-container-link').classList.remove('catalog__data-container-link_is-active');
            btn.setAttribute('aria-expanded', 'false');
        }else{
            btn.setAttribute('aria-expanded', 'true');
            btn.parentElement.querySelector('.catalog__data-container-link').classList.add('catalog__data-container-link_is-active');
        }
    }
})
