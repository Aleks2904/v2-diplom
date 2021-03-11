document.addEventListener('DOMContentLoaded', function(){
    const title = document.querySelector('.contacts__title'),
          subtitle = document.querySelector('.contacts__form-subtitle-container'),
          formBlock = document.querySelector('.contacts__form-block');

    function addContainer(){
        const width = window.screen.width;

        if( width >= 768){
            title.classList.remove('container');
            subtitle.classList.remove('container');
            formBlock.classList.remove('container');
        }else{
            title.classList.add('container');
            subtitle.classList.add('container');
            formBlock.classList.add('container');
        }
    }

    window.onresize = function(){
        addContainer();
    }

    addContainer();
})