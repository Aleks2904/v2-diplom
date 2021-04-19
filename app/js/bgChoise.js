document.addEventListener('DOMContentLoaded', function(){
    const headerChoise = document.querySelector('#header-select');

    function bgChoise(list){
        const item = list.querySelectorAll('li');
        
        item.forEach((el)=>{
            const idEL = el.id,
                  listChoise = el.querySelector('.choices__list--dropdown'),
                  item = listChoise.querySelectorAll('.choices__item');

            item.forEach((it)=>{
                const text = it.textContent,
                img = `../img/img/choise/${idEL}/${text}.png`;

                let xhr = new XMLHttpRequest();
                xhr.open('GET', img, true);
                xhr.responseType = 'text';
                xhr.onload = function (){
                    if(xhr.readyState == 4 && xhr.status === 200){
                        it.style.backgroundImage = `url("${img}")`;
                    }
                }
                xhr.send();
            })

        })
    }

    // headerChoise.addEventListener('click', function(e){
    //     if(e.target.classList.contains('choices__item--selectable')){
    //         el.setAttribute('data-simplebar', 'init');
    //     }
    // })


    bgChoise(headerChoise);

})