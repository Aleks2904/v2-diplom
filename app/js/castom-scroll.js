document.addEventListener('DOMContentLoaded', function(){
    const headerlist = document.querySelectorAll('.header-search-block__drop-item-list');

    Array.prototype.forEach.call(
        document.querySelectorAll('.events__item-contianer-subtitle'),
        el => new SimpleBar()
    );

    headerlist.forEach((el)=>{
        new SimpleBar(el);
    })
})