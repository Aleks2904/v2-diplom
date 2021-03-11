document.addEventListener('DOMContentLoaded', function(){
    const selectHeader1 = document.querySelector('#js-select-1'),
          selectHeader2 = document.querySelector('#js-select-2'),
          selectHeader3 = document.querySelector('#js-select-3'),
          selectHeader4 = document.querySelector('#js-select-4'),
          selectHeader5 = document.querySelector('#js-select-5'),
          selectGallery1 = document.querySelector('#js-gallery-select-1'),
          selectGallery2 = document.querySelector('#js-gallery-select-2'),
          selectGallery3 = document.querySelector('#js-gallery-select-3');
        
    const setupChoices = {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices',
            containerInner: 'choices__inner',
            input: 'choices__input',
            inputCloned: 'choices__input--cloned',
            list: 'choices__list',
            listItems: 'choices__list--multiple',
            listSingle: 'choices__list--single',
            listDropdown: 'choices__list--dropdown',
            item: 'choices__item',
            itemSelectable: 'choices__item--selectable',
            itemDisabled: 'choices__item--disabled',
            itemChoice: 'choices__item--choice',
            placeholder: 'choices__placeholder',
            group: 'choices__group',
            groupHeading: 'choices__heading',
            button: 'choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
          }
    };

    const choicesHeader1 = new Choices(selectHeader1, setupChoices),
          choicesHeader2 = new Choices(selectHeader2, setupChoices),
          choicesHeader3 = new Choices(selectHeader3, setupChoices),
          choicesHeader4 = new Choices(selectHeader4, setupChoices),
          choicesHeader5 = new Choices(selectHeader5, setupChoices),
          choicesGallery1 = new Choices(selectGallery1, setupChoices),
          choicesGallery2 = new Choices(selectGallery2, setupChoices),
          choicesGallery3 = new Choices(selectGallery3, setupChoices);

})