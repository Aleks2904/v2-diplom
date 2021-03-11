function OpenModalImg(obg, e){
    const modalImg = document.querySelector('#js-modal-img'),
          re = /\s*-\s*/;

    let id = e.split(re);
        id = id[2];
    
    modalImg.innerHTML = `
        <button id="js-modal-img-btn" class="modal-img__close-modal"></button>

        <div class="modal-img__container">
            <figure class="modal-img__figure"> 
                <picture>
                    <source type="image/webp" srcset="${obg[id].webp}">
                    <img src="${obg[id].jpg}" alt="${obg[id].alt}" class="modal-img__img">
                </picture>
            
                <figcaption class="modal-img__figcaption">
                    ${obg[id].disc}
                </figcaption>
            </figure>
        </div>
    `;
    modalImg.classList.remove('modal-img_is-close');
    modalImg.classList.add('modal-img_is-open');
}

document.addEventListener('DOMContentLoaded', function(){
    const modalImg = document.querySelector('#js-modal-img');

    modalImg.addEventListener('click', function(e){
        if(e.target.tagName == "BUTTON"){
            modalImg.classList.remove('modal-img_is-close');
            modalImg.classList.add('modal-img_is-close');

            setTimeout(()=>{
                modalImg.classList.remove('modal-img_is-close');
                modalImg.classList.remove('modal-img_is-open');
            },500)
        }
        
    })
})
