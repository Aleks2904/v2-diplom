document.addEventListener('DOMContentLoaded', function(){
    const tooltipContainer = document.querySelectorAll('.projects__discription_icon');

    tooltipContainer.forEach((el)=>{
        const parrent = el.parentElement;
        const tooltipText = parrent.querySelector('.projects__discription_tooltip-content');

        Popper.createPopper(el, tooltipText, {
            placement: 'top',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 15],
                    },
                },
                {
                    name: 'arrow',
                    options: {
                        padding: 2, // 5px from the edges of the popper
                    },
                },
              ],
        });
    })
})