document.addEventListener('DOMContentLoaded', function(){ 
      const dropContainer = document.querySelectorAll('.header-search-block__drop-item'),
            dropOpen = document.querySelectorAll('.header-search-block__drop-active'),
            link = document.querySelectorAll('.header-search-block__drop-item-link'),
            body = document.querySelector('body');

      function showActive(){
            dropContainer.forEach((el)=>{
                  const activeShow = el.querySelector('.header-search-block__drop-active'),
                        link = el.querySelector('.header-search-block__drop-item-link_active'),
                        linkText = link.textContent.replace(/ +/g, ' ').trim();
                  
                  activeShow.innerHTML = linkText;
            })
      }

      body.addEventListener('click', function(e){
            if(e.target.closest(".header-search-block__drop-item-container-list_active") == null && !e.target.classList.contains('header-search-block__drop-active')){
                  const activDrop = document.querySelector('.header-search-block__drop-item-container-list_active');

                  if(activDrop){
                        const listContainer = activDrop.parentElement,
                              thisDropOpen = listContainer.querySelector('.header-search-block__drop-active');

                        thisDropOpen.setAttribute('aria-expanded', false);
                        thisDropOpen.setAttribute('aria-label', 'открыть cписок');
                        activDrop.classList.remove('header-search-block__drop-item-container-list_active');
                        thisDropOpen.classList.remove('header-search-block__drop-active_active');

                  }
            }
      })

      link.forEach((el)=>{
            el.addEventListener('click', function(e){
                  const listContainer = el.closest(".header-search-block__drop-item"),
                        dropOpen = listContainer.querySelector('.header-search-block__drop-active'),
                        list = listContainer.querySelector('.header-search-block__drop-item-container-list'),
                        text = el.textContent.replace(/ +/g, ' ').trim();

                  dropOpen.textContent = text;

                  dropOpen.setAttribute('aria-expanded', false);
                  dropOpen.setAttribute('aria-label', 'открыть cписок');
                  list.classList.remove('header-search-block__drop-item-container-list_active');
                  dropOpen.classList.remove('header-search-block__drop-active_active');
            })
      })

      dropOpen.forEach((el)=>{
            el.addEventListener('click', function(e){
                  const listContainer = e.target.parentElement,
                        thisDropOpen = listContainer.querySelector('.header-search-block__drop-active'),
                        listUl = listContainer.querySelector('.header-search-block__drop-item-list'),
                        list = listContainer.querySelector('.header-search-block__drop-item-container-list');

                  if(list.classList.contains('header-search-block__drop-item-container-list_active')){
                        thisDropOpen.setAttribute('aria-expanded', false);
                        thisDropOpen.setAttribute('aria-label', 'открыть cписок');
                        list.classList.remove('header-search-block__drop-item-container-list_active');
                        thisDropOpen.classList.remove('header-search-block__drop-active_active');
                        return;
                  }

                  dropOpen.forEach((all)=>{
                        const listContainer = all.parentElement,
                              thisDropOpen = listContainer.querySelector('.header-search-block__drop-active'),
                              list = listContainer.querySelector('.header-search-block__drop-item-container-list');
                        
                        thisDropOpen.setAttribute('aria-expanded', false);
                        thisDropOpen.setAttribute('aria-label', 'открыть cписок');
                        list.classList.remove('header-search-block__drop-item-container-list_active');  
                        thisDropOpen.classList.remove('header-search-block__drop-active_active');
                  })

                  listUl.scroll(0,0)

                  thisDropOpen.setAttribute('aria-expanded', true);
                  thisDropOpen.setAttribute('aria-label', 'закрыть cписок');

                  list.classList.add('header-search-block__drop-item-container-list_active');
                  thisDropOpen.classList.add('header-search-block__drop-active_active');
            })
      })

      showActive()
})