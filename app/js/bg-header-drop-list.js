document.addEventListener('DOMContentLoaded', function(){
    const headerChoise = document.querySelectorAll('.header-search-block__drop-item-container-list');
        
    async function bgHeaderDropList(list){
        list.forEach((el)=>{
            const idEL = el.id,
            item = el.querySelectorAll('.header-search-block__drop-item-link');

            item.forEach((it)=>{
                const text = it.textContent.replace(/ +/g, ' ').trim(),
                        img = `../img/img/header-drop-list/${idEL}/${text}.png`;

                let response = fetch(img,{
                    method: 'GET'
                });

                console.log(response.ok)
                
                if(response.ok){
                    it.style.backgroundImage = `url("${img}")`;
                }
            })

            // item.forEach((it)=>{

            //     // const text = it.textContent.replace(/ +/g, ' ').trim(),
            //     //         img = `../img/img/header-drop-list/${idEL}/${text}.png`;

            //     // let response = fetch(img,{
            //     //     method: 'GET'
            //     // });

            //     // console.log(response.ok)

            //     // let xhr = new XMLHttpRequest();
            //     // xhr.open('GET', img, true);
            //     // xhr.responseType = 'text';
            //     // xhr.onreadystatechange = function (){
                    
            //     //     if(xhr.readyState == 4 && xhr.status === 200){
            //     //         it.style.backgroundImage = `url("${img}")`;
            //     //     }else{
            //     //         return false;
            //     //     }
            //     // }

            //     // xhr.send();
            // })
        })
    }

   bgHeaderDropList(headerChoise);
})