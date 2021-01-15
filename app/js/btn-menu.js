document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#js-btn-nav');

    btn.addEventListener('click', function(e){
        e.preventDefault();

        const attr = btn.getAttribute('aria-expanded');

        if(attr == 'false'){
            btn.setAttribute('aria-expanded', 'ture');
            btn.classList.remove('header-nav-block__open-nav_is-open');
            btn.classList.add('header-nav-block__open-nav_is-close');
        }else{
            btn.setAttribute('aria-expanded', 'false');
            btn.classList.add('header-nav-block__open-nav_is-open');
            btn.classList.remove('header-nav-block__open-nav_is-close');
        }
    })
})