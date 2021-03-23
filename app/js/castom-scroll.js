document.addEventListener('DOMContentLoaded', function(){
    Array.prototype.forEach.call(
        document.querySelectorAll('.events__item-contianer-subtitle'),
        el => new SimpleBar()
    );
})