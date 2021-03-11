document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#js-header-search-form'),
          input = document.querySelector('#js-header-search-input'),
          tooltip = document.querySelector('#js-header-search-tooltip'),
          logo = document.querySelector('#js-header-logo');

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
    
    form.addEventListener('mouseover', function(e){
        const width = window.screen.width;
        if(width < 680){
            logo.style.opacity = '0';
        }
    })

    form.addEventListener('mouseout', function(e){
        logo.style.opacity = '1';
    })
})