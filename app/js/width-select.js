document.addEventListener('DOMContentLoaded', function(){
    const select = document.querySelectorAll('.header-search-block__drop-item');

    select.forEach(function(el){
        el.addEventListener('click', function(e){
            setWidthSelect(el)
        })
        el.addEventListener('keyup', function(e){
            if(e.code=='Enter'){
                setWidthSelect(el)
            }
        })
    })

    function setWidthSelect(el){
        const allSelect = el.querySelectorAll('.choices__item--choice'),
                  dropList = el.querySelector('.choices__list--dropdown');

        let allWidth = [];
        allSelect.forEach(function(sel){
            allWidth.push(sel.offsetWidth);
        })

        const widthEl = Math.max.apply(null, allWidth);
        dropList.style.width = `${widthEl}px`;
        //allSelect.style.width = '100%';
    }

    document.body.addEventListener('keyup', function(e){
        if(e.code == 'Tab'){
            return false;
        }
    })
})