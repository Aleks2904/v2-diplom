document.addEventListener('DOMContentLoaded', function(){
    (function() {
        [].slice.call( document.querySelectorAll( '#js-gallery-select-1' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
    (function() {
        [].slice.call( document.querySelectorAll( '#js-gallery-select-2' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
    (function() {
        [].slice.call( document.querySelectorAll( '#js-gallery-select-3' ) ).forEach( function(el) {	
            new SelectFx(el);
        } );
    })();
})