document.addEventListener('DOMContentLoaded', function(){
    const headerChoise = document.querySelectorAll('.header-search-block__drop-item-container-list');

    async function bgSave(img, item){
        let response = await fetch(img);
        
        if(response.ok){
            item.style.backgroundImage = `url("${img}")`;
        }  
    }

    headerChoise.forEach(el=>{
        let lists = el,
            listsId = lists.id,
            links = lists.querySelectorAll('.header-search-block__drop-item-link');

        links.forEach(li=>{
            let key = li,
            keyText = key.textContent.replace(/ +/g, ' ').trim(),
            img = `../img/img/header-drop-list/${listsId}/${keyText}.png`;

            bgSave(img, key)
        })
    })
})