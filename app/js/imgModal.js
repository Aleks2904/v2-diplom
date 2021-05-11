let openImg;

function OpenModalImg(obg, e, el){
    const oModal  = new Promise((resolve, reject)=>{
        const modalImg = document.querySelector('#js-modal-img'),
              modalImgContent = document.querySelector('#js-modal-img-content'),
              re = /\s*-\s*/;
    
        let id = e.split(re);
            id = id[2];
        
            modalImgContent.innerHTML = `
            <figure class="modal__figure"> 
                <picture class="modal__picture">
                    <source type="image/webp" srcset="${obg[id].webp}">
                    <img src="${obg[id].jpg}" alt="${obg[id].alt}" class="modal__img">
                </picture>
            
                <figcaption class="modal__figcaption">
                    <div class="modal__figcaption-container">
                        <h2 class="modal__title">
                            ${obg[id].title}
                        </h2>
    
                        <span class="modal__pictureName">
                            ${obg[id].alt}
                        </span>
    
                        <time class="modal__time">
                            ${obg[id].yearsOfLife}
                        </time>
    
                        <p class="modal__discription" >
                            ${obg[id].disc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        `;
        modalImg.classList.remove('modal_is-close');
        modalImg.classList.add('modal_is-open');
    
        resolve(modalImg);
    })
    
    oModal.then((modalImg)=>{
        const closeBtn = modalImg.querySelector('#js-modal-btn'),
              main = document.querySelector('.main');
        
    
    })
}

// document.addEventListener('DOMContentLoaded', function(){
//     const modalImg = document.querySelector('#js-modal'),
//           main = document.querySelector('.main');

//     modalImg.addEventListener('click', function(e){
//         if(e.target.tagName == "BUTTON"){
//             modalImg.classList.remove('modal_is-close');
//             modalImg.classList.add('modal_is-close');
//             main.classList.remove('open-modal');

//             setTimeout(()=>{
//                 modalImg.classList.remove('modal_is-close');
//                 modalImg.classList.remove('modal_is-open');
//             },500)
//         }
//     })
// })
