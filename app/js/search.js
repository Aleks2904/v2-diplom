document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#js-header-search-form'),
          input = document.querySelector('#js-header-search-input'),
          tooltip = document.querySelector('#js-header-search-tooltip'),
          logo = document.querySelector('#js-header-logo'),
          headerContainer = document.querySelector('.header-nav-block__container'),
          btnFrom = document.querySelector('#js-header-search-btn');

    let tl = gsap.timeline();

    form.addEventListener('submit', function(e){
        const value = input.value;
        if(value == ''){
            e.preventDefault();

            tooltip.classList.add('header-search-block__search-tooltip_is-active');

            setTimeout(()=>{
                tooltip.classList.add('header-search-block__search-tooltip_active');
            }, 1);

            setTimeout(()=>{
                tooltip.classList.remove('header-search-block__search-tooltip_active');
            }, 800);
            setTimeout(()=>{
                tooltip.classList.remove('header-search-block__search-tooltip_is-active');
            }, 801);
        }else{
            input.value = '';
        }
    })

    //показ
    
    btnFrom.addEventListener('mouseover', function(e){
        const width = document.documentElement.clientWidth;
        if(width < 680){
            logo.style.opacity = '0';
        }

        if(width < 1400){
            searchGsap('mouseover');
        };
    })

    btnFrom.addEventListener('focus', function(e){
        const width = document.documentElement.clientWidth;

        if(width < 680){
            logo.style.opacity = '0';
        }

        if(width < 1400){
            searchGsap('mouseover');
        };
    })

    input.addEventListener('focus', function(e){
        const width = document.documentElement.clientWidth;

        if(width < 680){
            logo.style.opacity = '0';
        }

        if(width < 1400){
            searchGsap('mouseover');
        };
    })

    //скрытие

    form.addEventListener('mouseout', function(e){
        if(!input.contains(e.relatedTarget) && !btnFrom.contains(e.relatedTarget) && !form.contains(e.relatedTarget)){
            const width = document.documentElement.clientWidth;

            if(width < 1400){
                searchGsap('mouseout');
                openLogo();
            }else{
                logo.style.opacity = '1';
            }
        }
    })
    
    btnFrom.addEventListener('blur', function(e){
        if(!input.contains(e.relatedTarget) && !btnFrom.contains(e.relatedTarget) && !form.contains(e.relatedTarget)){
            const width = document.documentElement.clientWidth;

            if(width < 1400){
                searchGsap('mouseout');
                openLogo();
            }else{
                logo.style.opacity = '1';
            }
        }
    })

    input.addEventListener('blur', function(e){
        if(!input.contains(e.relatedTarget) && !btnFrom.contains(e.relatedTarget) && !form.contains(e.relatedTarget)){
            const width = document.documentElement.clientWidth;

            if(width < 1400){
                searchGsap('mouseout');
                openLogo();
            }else{
                logo.style.opacity = '1';
            }
        }
    })

    //функция скрытия/показа

    function searchGsap(status){
        const procent = 15,
              widthProcetn = (headerContainer.clientWidth / 100) * procent;

        let mouse = tl
                        .to(form,{
                            duration: 1,
                            width: widthProcetn,
                            minWidth: '200px'
                        })
                        .to(input,{
                            duration: 0.5,
                            opacity: 1,
                            position: 'relative'
                        }, "-=0.5");

        if(status == 'mouseover') {
            mouse.play();
        }else{
            mouse.reverse();
        }
    }

    function openLogo(){
        let btnFocus = btnFrom.clientWidth,
            forms = form.clientWidth;

        if(btnFocus != forms){
            let interval = setInterval(()=>{

                btnFocus = btnFrom.clientWidth,
                forms = form.clientWidth;

                if(btnFocus == forms){
                    logo.style.opacity = '1';
                    clearInterval(interval);
                }
            },200)
        }
    }
})