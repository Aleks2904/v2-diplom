document.addEventListener('DOMContentLoaded', function(){
    const headerChoise = document.querySelectorAll('.header-search-block__drop-item-container-list');
        
    for(let i = 0; i < headerChoise.length; i++){
        let lists = headerChoise[i],
            listsId = lists.id,
            links = lists.querySelectorAll('.header-search-block__drop-item-link');

        for(let k = 0; k < links.length ;k++){
            let key = links[k],
                keyTest = key.textContent.replace(/ +/g, ' ').trim(),
                img = `../img/img/header-drop-list/${listsId}/${keyTest}.png`;

            test(img, key)
            //obg[k] = `'${key}'`;

        }
    }
    
    async function test(img, it){
        let response = await fetch(img);
        
        if(response.ok){
            it.style.backgroundImage = `url("${img}")`;
        }  
    }
})