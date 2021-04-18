document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('#js-btn-nav'),
          btnClose = document.querySelector('#js-btn-nav-close'),
          nav = document.querySelector('#js-nav'),
          navLink = document.querySelectorAll('.header-nav-block__nav-link'),
          header = document.querySelector('.header'),
          heroBlock = document.querySelector('#hero-block'),
          body = document.querySelector('body');

    btn.addEventListener('click', function(e){
        e.preventDefault();

        const heightBtn = btn.clientHeight,
              heightHeader = header.clientHeight,
              padding = (heightHeader - heightBtn) / 2,
              heightHeroBlock = heroBlock.clientHeight,
              heightMenu = heightHeader + heightHeroBlock,
              width = document.documentElement.clientWidth;

        nav.style.paddingTop = `${padding}px`;

        if(width > 767){
            nav.style.height = `${heightMenu}px`;
        }else{
            nav.style.height = `65vh`;
        }
        
        nav.setAttribute('aria-label', 'меню открыто');
        nav.classList.add('header-nav-block__nav-block_is-active');
        nav.classList.remove('header-nav-block__nav-block_anima-close');
        nav.classList.add('header-nav-block__nav-block_anima-open');
    })

    btnClose.addEventListener('click', function(e){
        e.preventDefault();

        nav.setAttribute('aria-label', 'меню закрыто');
        nav.classList.remove('header-nav-block__nav-block_anima-close');
        nav.classList.remove('header-nav-block__nav-block_anima-open');
        nav.classList.add('header-nav-block__nav-block_anima-close');

        setTimeout(()=>{
            nav.classList.remove('header-nav-block__nav-block_is-active');
        },1000)
    })

    body.addEventListener('click', (e)=>{
        if(!nav.contains(e.target) && !btn.contains(e.target)){
            nav.setAttribute('aria-label', 'меню закрыто');
            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_anima-open');
            nav.classList.add('header-nav-block__nav-block_anima-close');
    
            setTimeout(()=>{
                nav.classList.remove('header-nav-block__nav-block_is-active');
            },1000)
        }
    })

    navLink.forEach(function(el){
        el.addEventListener('click', function(e){
            const width = document.body.clientWidth;

            if(width < 1400){
                e.preventDefault();

                nav.setAttribute('aria-label', 'меню закрыто');
                nav.classList.remove('header-nav-block__nav-block_anima-close');
                nav.classList.remove('header-nav-block__nav-block_anima-open');
                nav.classList.add('header-nav-block__nav-block_anima-close');

                setTimeout(()=>{
                    nav.classList.remove('header-nav-block__nav-block_is-active');
                },1000)
            }
        })
    })

    window.onresize = function() {
        const width = document.body.clientWidth;

        if(width > 1400){
            nav.removeAttribute('aria-label');
            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_anima-open');
            nav.classList.remove('header-nav-block__nav-block_anima-close');
            nav.classList.remove('header-nav-block__nav-block_is-active');
        }
    };
})