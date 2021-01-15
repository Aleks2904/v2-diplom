document.addEventListener('DOMContentLoaded', function(){ 
    const supportWebp =()=> {
        const elem = document.createElement('canvas');
        return elem.getContext && elem.getContext('2d') ?
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0 :
            false;
    }
    const result = supportWebp();

    //block gallery
    const gallery = document.querySelector('.gallery');

    if(result == true){
        gallery.classList.add('bg-gallery-webp');
    }else{
        gallery.classList.add('bg-gallery-img');
    };

    //block working
});