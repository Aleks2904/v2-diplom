document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#js-btn-nav'),
          nav = document.querySelector('#js-nav'),
          navLink = document.querySelectorAll('.header-nav-block__nav-link');

    let checkAttr;

    btn.addEventListener('click', function(e){
        e.preventDefault();

        const attr = btn.getAttribute('aria-expanded');
        checkAttr = attr;

        if(attr == 'false'){
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('aria-label', 'закрыть меню');
            btn.classList.remove('header-nav-block__open-nav_is-open');
            btn.classList.add('header-nav-block__open-nav_is-close');

            nav.classList.add('header-nav-block__nav-block_is-active');
            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.add('header-nav-block__nav-block_anima-open');

            document.body.style.overflowY = "hidden";
        }else{
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'открыть меню');
            btn.classList.add('header-nav-block__open-nav_is-open');
            btn.classList.remove('header-nav-block__open-nav_is-close');

            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_anima-open');
            nav.classList.add('header-nav-block__nav-block_anima-close');
            document.body.style.overflowY = "auto";

            setTimeout(()=>{
                if(checkAttr == 'true'){
                    nav.classList.remove('header-nav-block__nav-block_is-active');
                }
            },1000)
        }
    })

    navLink.forEach(function(el){
        el.addEventListener('click', function(e){
            const width = document.body.clientWidth;
            if(width < 1400){
                e.preventDefault();

                checkAttr = 'true';

                btn.setAttribute('aria-expanded', 'false');
                btn.setAttribute('aria-label', 'открыть меню');
                btn.classList.add('header-nav-block__open-nav_is-open');
                btn.classList.remove('header-nav-block__open-nav_is-close');

                nav.classList.remove('header-nav-block__nav-block_anima-close');
                nav.classList.remove('header-nav-block__nav-block_anima-open');
                nav.classList.add('header-nav-block__nav-block_anima-close');

                document.body.style.overflowY = "auto";

                setTimeout(()=>{
                    if(checkAttr == 'true'){
                        nav.classList.remove('header-nav-block__nav-block_is-active');
                    }
                },1000)
            }
        })
    })

    window.onresize = function() {
        const width = document.body.clientWidth;

        if(width > 1400){
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'открыть меню');
            btn.classList.add('header-nav-block__open-nav_is-open');
            btn.classList.remove('header-nav-block__open-nav_is-close');

            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_anima-open');
            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_is-active');
            document.body.style.overflowY = "auto";
        }
    };
})