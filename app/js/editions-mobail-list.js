document.addEventListener('DOMContentLoaded', function(){
    const title = document.querySelector('#js-editions-title-check'),
          containerList = document.querySelector('#js-editions-container-list-check'),
          list = document.querySelector('#js-editions-list-check'),
          inputPrice  = document.querySelectorAll('.editions__price-input');

    title.addEventListener('click', function(e){
        openCloseList(e)
    });

    title.addEventListener('keydown', function(e){
        if(e.key == 'Enter'){
            openCloseList(e);
        }
    });

    list.addEventListener('click', function(e){
        if(e.target.classList.contains('editions__item-check')){
            const li = e.target;
            cloneCheck(li);
            settingCheck(li);
        }
        if(e.target.parentElement.classList.contains('editions__item-check')){
            const li = e.target.parentElement;
            cloneCheck(li);
            settingCheck(li);
        }
        if(e.target.parentElement.parentElement.classList.contains('editions__item-check')){
            const li = e.target.parentElement.parentElement;
            cloneCheck(li);
            settingCheck(li);
        }
    })

    containerList.addEventListener('click', function(e){
        if(e.target.classList.contains('editions__clone-item-check')){
            const li = e.target;
            settingCheckClone(li);
        }
        if(e.target.parentElement.classList.contains('editions__clone-item-check')){
            const li = e.target.parentElement;
            settingCheckClone(li);
        }
        if(e.target.parentElement.parentElement.classList.contains('editions__clone-item-check')){
            const li = e.target.parentElement.parentElement;
            settingCheckClone(li);
        }

        if(e.target.classList.contains('editions__clone-btn-close')){
            const li = e.target.parentElement;
            removeCloneElem(li);
        }
    })

    inputPrice.forEach((el)=>{
        el.addEventListener('click',function(){
            zeroingInput(el);
        })

        el.addEventListener('focus',function(){
            zeroingInput(el);
        })

        el.addEventListener('blur', function(){
            emptyInput(el);
        })
    })

    function addAttrTitle(){
        const width = window.screen.width;

        if(width < 768){
            title.setAttribute('role', 'button');
            title.setAttribute('aria-expanded', 'false');
            title.setAttribute('aria-label', 'Показать категории');
            title.setAttribute('type', 'button');
            title.setAttribute('aria-controls', 'js-editions-list-check');
            title.setAttribute('tabindex', '0');

            list.setAttribute('aria-labelledby', 'js-editions-title-check');
                                    
        }else{
            title.removeAttribute('role');
            title.removeAttribute('aria-expanded');
            title.removeAttribute('type');
            title.removeAttribute('aria-controls');
            title.removeAttribute('aria-label');
            title.removeAttribute('tabindex');

            list.removeAttribute('aria-labelledby');
        }
    }

    function openCloseList(e){
        const width = window.screen.width;

        if(width < 768){
            const target = e.target,
                  attr = target.getAttribute('aria-expanded');

            if(attr == 'false'){
                target.setAttribute('aria-expanded', 'true');
                target.setAttribute('aria-label', 'Скрыть категории');
                target.classList.add('editions__title-check_active');

                list.classList.add('editions__list-check_active');
            }else{
                target.setAttribute('aria-expanded', 'false');
                target.setAttribute('aria-label', 'Показать категории');
                target.classList.remove('editions__title-check_active');

                list.classList.remove('editions__list-check_active');
            }
        }
    }

    function cloneCheck(li){
        const label = li.querySelector('label'),
              labelText = label.textContent.replace(/\s+/g, ' ').trim(),
              check = li.querySelector('input'),
              indexContainer = containerList.querySelectorAll('input'),
              mainInput = list.querySelectorAll('input');

        let checkAttr = false;
        check.setAttribute('name', `${labelText}`);

        for(let i = 0; i < indexContainer.length; i++){
            const name = check.getAttribute('name'),
                  attr = indexContainer[i].getAttribute('name');

            if(name == attr){
                checkAttr = true;
                break;
            }else{
                checkAttr = false;
            }
        }

        if(checkAttr == false ){
            containerList.innerHTML += `
                <li class="editions__clone-item-check">
                    <label class="editions__label-check">
                        <input type="checkbox" name="${labelText}" class="editions__inpyt-check">
                        <span class="editions__span-check"></span>
                        <span class="editions__span-text">
                            ${labelText}
                        </span>
                    </label>

                    <button type="button" class="editions__clone-btn-close"></button>
                </li>
            `
        }

        mainInput.forEach((el)=>{
            const status = el.checked,
                  name = el.getAttribute('name'),
                  allCloneInput = containerList.querySelectorAll('input');

            for(let i = 0; i < allCloneInput.length; i++){
                const nameClone = allCloneInput[i].getAttribute('name');

                if(nameClone == name){
                    allCloneInput[i].checked = status;
                }
            }
        })
    }

    function settingCheck(li){
        const input = li.querySelector('input'),
              inputName = input.getAttribute('name'),
              clonInput = containerList.querySelectorAll('input'),
              checkStatus = input.checked;

        for( let i = 0; i < clonInput.length; i++){
            const clonName = clonInput[i].getAttribute('name');

            if(clonName == inputName){
                clonInput[i].checked = checkStatus;
            }
        }
    }

    function settingCheckClone(li){
        const   input = li.querySelector('input'),
                inputName = input.getAttribute('name'),
                mainInput = list.querySelectorAll('input'),
                checkStatus = input.checked;

        for( let i = 0; i < mainInput.length; i++){
            const mainName = mainInput[i].getAttribute('name');

            if(mainName == inputName){
                mainInput[i].checked = checkStatus;
            }
        }
    }

    function removeCloneElem(li){
        const text = li.querySelector('.editions__span-text').textContent.replace(/\s+/g, ' ').trim(),
              originItem = document.querySelectorAll('.editions__item-check');

        originItem.forEach((el)=>{
            const originText = el.querySelector('.editions__span-text').textContent.replace(/\s+/g, ' ').trim();
            if(text === originText){
                const check = el.querySelector('.editions__inpyt-check');
                check.checked = false;
            }
        })

        containerList.removeChild(li);
    }

    function zeroingInput(el){
        el.value = '';
    }

    function emptyInput(el){
        const value = el.value;
        if(value == ''){
            const name = el.name;

            if(name == 'min'){
                el.value = 50;
            }

            if(name == 'max'){
                el.value = 25000;
            }
        }
    }

    window.onresize = function() {
        addAttrTitle();
    }

    addAttrTitle();
})