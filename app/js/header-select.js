document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelectorAll('.cs-select');

    (function() {
        [].slice.call( document.querySelectorAll( '#js-select-1' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
    (function() {
        [].slice.call( document.querySelectorAll( '#js-select-2' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
    (function() {
        [].slice.call( document.querySelectorAll( '#js-select-3' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
    (function() {
        [].slice.call( document.querySelectorAll( '#js-select-4' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();

    (function() {
        [].slice.call( document.querySelectorAll( '#js-select-5' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
});