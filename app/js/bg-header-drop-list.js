document.addEventListener('DOMContentLoaded', function(){
    const headerChoise = document.querySelectorAll('.header-search-block__drop-item-container-list');

    headerChoise.forEach(el=>{
        let lists = el,
            listsId = lists.id,
            links = lists.querySelectorAll('.header-search-block__drop-item-link');

        links.forEach(li=>{
            let key = li,
                keyText = key.textContent.replace(/ +/g, ' ').trim(),
                img = `../img/img/header-drop-list/${listsId}/${keyText}.png`;

            let myRequest = new Request(img);

            fetch(myRequest)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (response.ok) {
                    key.style.backgroundImage = `url("${img}")`;
                }
            }) 
        })
    })
})