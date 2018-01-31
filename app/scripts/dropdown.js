/* eslint-disable */

var multiLevelDropdownId = 0;

function isDropdownRoot(anyElementInsideDropdown){
    return $(anyElementInsideDropdown).parent().closest('.dropdown__menu').length < 1;
}

function hideAllDropdowns(exceptionId){
    var exception = exceptionId === undefined ? "" : `:not([data-multi-level-id="${exceptionId}"])`;
    $('.dropdown__menu[data-multi-level-id]' + exception).each(function(i, dropdownMenu){
        $(dropdownMenu).hide();
        var button = document.querySelector(`.dropdown__toggle[data-multi-level-id="${dropdownMenu.dataset.multiLevelId}"]`);
        if(button !== null && button.parentElement.classList.contains('dropdown')){
            button.parentElement.classList.remove('open');
        }
    });
}

if(window.hasClickEventListenerForClosingDropdowns === undefined){
    window.hasClickEventListenerForClosingDropdowns = true;
    window.addEventListener('click', function (event){
        if(event.target.classList.contains('dropdown-toggle') === false){
            // dropdown toggle handles this itself
            hideAllDropdowns();
        }
    }
    , true);
}

function manageVisibilityOfChildDropdowns(dropdownToggleButton, dropdownMenu){
    if(dropdownToggleButton !== null){
        dropdownToggleButton.addEventListener('mouseleave', function(event){

            // when mouse leaves the button - hide child list

            if(event.target.dataset.triggerBy !== 'mouseenter'){
                return;
            }
    
            var leftToElement = event.relatedTarget;
    
            if(leftToElement.contains(event.target) && isDropdownRoot(event.target) === false){
                // allow leaving to parent, because when scrollbar exists between a button and the child list
                // moving a mouse on a scrollbar triggers mouseleave to the scrollable container
                return;
            }
    
            var parentDropdown = $(leftToElement).closest(".dropdown__menu");
            if(parentDropdown.length > 0 && parentDropdown.first().get(0).dataset.multiLevelId === dropdownToggleButton.dataset.multiLevelId){
                return; // keep displaying the list even if mouse cursor moved to the child list
            }
    
            document.querySelector(`.dropdown__menu[data-multi-level-id='${dropdownToggleButton.dataset.multiLevelId}']`).style.display = 'none';
        }); 
    }

    Array.from(dropdownMenu.children).forEach(function(child){

        // NOTE: no support for dynamically inserting children later

        child.addEventListener('mouseenter', closeSiblingLists);
    });

    dropdownMenu.addEventListener('mouseleave', function(e){
        var exceptionId;

        var dropdownToggleButton = document.querySelector(`.dropdown-toggle[data-multi-level-id='${e.target.dataset.multiLevelId}']`);

        if(e.relatedTarget === dropdownToggleButton){
            return;
        }

        if(dropdownToggleButton.dataset.triggerBy !== 'mouseenter' && isDropdownRoot(dropdownToggleButton)){
            exceptionId = e.target.dataset.multiLevelId;
        }

        var listMouseLeftToDropdownMenu = null;
        var listMouseLeftFrom = e.target;

        if(listMouseLeftFrom.classList.contains('dropdown__menu') === false){
            throw new Error('Unexpected element type');
        }

        if(e.relatedTarget !== null){
            if(e.relatedTarget.classList.contains('dropdown__menu')){
                listMouseLeftToDropdownMenu = e.relatedTarget;
            }
            else if($(e.relatedTarget).parents('.dropdown__menu').length > 0){
                listMouseLeftToDropdownMenu = $(e.relatedTarget).parents('.dropdown__menu').first().get(0);
            }
        }

        if(listMouseLeftToDropdownMenu === null){
            // keep a list open if mouse leaves to another list
            // we can't verify if mouseleave originated from a parent list without resorting to setTimeout hackery
            // because e.target will refer to a list instead of a button in case there is a scrollbar on the list
            hideAllDropdowns(exceptionId);
        }
        else if (parseInt(listMouseLeftFrom.dataset.multiLevelId) > parseInt(listMouseLeftToDropdownMenu.dataset.multiLevelId)){
            // mouse left from child list to parent list
            $(listMouseLeftFrom).hide();
        }
    });

    if(dropdownToggleButton !== null){
        dropdownMenu.dataset.multiLevelId = multiLevelDropdownId;
        dropdownToggleButton.dataset.multiLevelId = multiLevelDropdownId;
        document.body.append(dropdownMenu);
        multiLevelDropdownId++;
    }
}

function getDropdownToggleButton(e){

    var dropdownToggleButton = null;

    if(e.target.classList.contains('dropdown-toggle') === true){
        return e.target;
    }
    else if($(e.target).parents('.dropdown-toggle').length > 0){
        // mouse event triggered on the child element e.g. an icon inside a .dropdown-toggle
        return $(e.target).parents('.dropdown-toggle').first().get(0);
    }
    else if(
        e.target.classList.contains('dropdown')
        && Array.from(e.target.children)
            .find((child)=> child.classList.contains('dropdown-toggle')) !== null
    ){
        // mouse event triggered on the parent element e.g. div.dropdown
        return e.target.querySelector('.dropdown-toggle');
    }

    return null;
}

function closeSiblingLists(event){

    // When mouse enters a list item, close all other dropdowns
    // which were triggered from one of the siblings of that list item

    var mouseFromElement = event.relatedTarget;
    var mouseToElement = event.target;

    var mouseToElementDropdownToggle = null;

    if(mouseToElement.classList.contains('dropdown-toggle')){
        mouseToElementDropdownToggle = mouseToElement;
    }
    else {
        mouseToElementDropdownToggle = mouseToElement.querySelector('.dropdown-toggle')
    }

    var mouseToElementParentList = null;

    if(isDropdownRoot(mouseToElement)){
        mouseToElementParentList = $(mouseToElement).parents('.dropdown').first().get(0);
    }
    else {
        mouseToElementParentList = $(mouseToElement).parents('.dropdown__menu').first().get(0);
    }

    if(mouseFromElement !== null && mouseToElementParentList.contains(mouseFromElement) ){
        Array.from(mouseToElementParentList.querySelectorAll('.dropdown-toggle')).forEach(function(dropdownToggle){
            if(mouseToElementDropdownToggle !== null && mouseToElementDropdownToggle.dataset.multiLevelId === dropdownToggle.dataset.multiLevelId){
                return;
            }
            if(dropdownToggle.dataset.multiLevelId === undefined){
                return;
            }
            document.querySelector(`.dropdown__menu[data-multi-level-id='${dropdownToggle.dataset.multiLevelId}']`).style.display = 'none';
        });
    }
}

function handleDisplayingAndPositioningOfDropdowns(e){

    var dropdownToggleButton = getDropdownToggleButton(e);

    if(dropdownToggleButton === null){
        hideAllDropdowns();
        return;
    }

    if(dropdownToggleButton.dataset.triggerBy === undefined){
        dropdownToggleButton.dataset.triggerBy = isDropdownRoot(dropdownToggleButton) ? 'click' : 'mouseenter';
    }

    // mouse enters to a button which toggles a dropdown (can be anywhere in the tree)
    var dropdownMenu = Array.from(dropdownToggleButton.parentElement.children).find((el) => el.classList.contains('dropdown__menu'));
    if(dropdownMenu !== undefined){
        manageVisibilityOfChildDropdowns(dropdownToggleButton, dropdownMenu);
    }

    if(e.type !== dropdownToggleButton.dataset.triggerBy){
        return;
    }

    var dropdownRootElement = dropdownToggleButton.parentElement;
    if(e.type === 'click'){
        if(dropdownRootElement.classList.contains('open')){
            dropdownRootElement.classList.remove('open');
            hideAllDropdowns();
            return;
        }
        else {
            hideAllDropdowns();// hide other open dropdowns before opening a new one
            dropdownRootElement.classList.add('open');
        }
    }
    
    var nextLevelId = dropdownToggleButton.dataset.multiLevelId;
    var nextLevelDropdownElement = document.querySelector(`.dropdown__menu[data-multi-level-id='${nextLevelId}']`);

    // position in a way that dropdown is always in the viewport and is opened in the right direction
    nextLevelDropdownElement.style.display = "block";
    nextLevelDropdownElement.style['max-height'] = '';
    var parentDropdownBoundingClientRect = (
        $(dropdownToggleButton).parents(".dropdown__menu").length > 0
            ? $(dropdownToggleButton).parents(".dropdown__menu").first().get(0)
            : dropdownToggleButton
        
    ).getBoundingClientRect();

    var minSpacingFromTheEdgeOfTheViewport = 10;

    var nextLevelHeight = nextLevelDropdownElement.offsetHeight;

    var buttonBoundingClientRect = dropdownToggleButton.getBoundingClientRect();
    var buttonTopToViewportBottom = $(window).innerHeight() - buttonBoundingClientRect.top;
    var buttonBottomToViewportTop = buttonBoundingClientRect.bottom;

    var $dropdownElement = $(dropdownToggleButton).closest('.dropdown');

    var enoughSpaceOnTheRight = isDropdownRoot(dropdownToggleButton)
        ? $(window).innerWidth() > buttonBoundingClientRect.left + nextLevelDropdownElement.offsetWidth
        : $(window).innerWidth() > buttonBoundingClientRect.right + nextLevelDropdownElement.offsetWidth;

    if(!enoughSpaceOnTheRight){
        $dropdownElement.addClass('dropdown--dropleft')
    }
    var dropdownDropLeft = $dropdownElement.hasClass('dropdown--dropleft') || !enoughSpaceOnTheRight;
    var dropdownDropRight = $dropdownElement.hasClass('dropdown--dropright');

    var toggleButtonHeight = isDropdownRoot(dropdownToggleButton) && !dropdownDropLeft && !dropdownDropRight ? dropdownToggleButton.offsetHeight : 0;

    var enoughSpaceAtTheBottomWithoutOffset = buttonTopToViewportBottom - toggleButtonHeight - minSpacingFromTheEdgeOfTheViewport > nextLevelHeight;
    var moreSpaceAtTheBottomThanTop = buttonTopToViewportBottom - toggleButtonHeight - minSpacingFromTheEdgeOfTheViewport > buttonBottomToViewportTop + toggleButtonHeight;


    // vertical positioning
    if(enoughSpaceAtTheBottomWithoutOffset || moreSpaceAtTheBottomThanTop){
        var maxHeight = buttonTopToViewportBottom - toggleButtonHeight - minSpacingFromTheEdgeOfTheViewport;
        nextLevelDropdownElement.style.top = (document.documentElement.scrollTop + buttonBoundingClientRect.top + toggleButtonHeight) + 'px';
        nextLevelDropdownElement.style['max-height'] = maxHeight + 'px';
    }
    else{
        var maxHeight = buttonBottomToViewportTop - toggleButtonHeight;
        nextLevelDropdownElement.style.top = document.documentElement.scrollTop + Math.max(maxHeight - nextLevelHeight, minSpacingFromTheEdgeOfTheViewport) + 'px';
        nextLevelDropdownElement.style['max-height'] = (maxHeight - nextLevelHeight > minSpacingFromTheEdgeOfTheViewport ? maxHeight : maxHeight - minSpacingFromTheEdgeOfTheViewport) + 'px';
    }

    // horizontal positioning
    if(isDropdownRoot(dropdownToggleButton) && dropdownDropLeft === false && dropdownDropRight === false){
        nextLevelDropdownElement.style.left = parentDropdownBoundingClientRect.left + "px";
    }
    else if(isDropdownRoot(dropdownToggleButton) && dropdownDropLeft === true){
        nextLevelDropdownElement.style.left = (parentDropdownBoundingClientRect.left - nextLevelDropdownElement.offsetWidth) + "px";
    }
    else {

        var previousDropdownMenuOpenedToLeft = false;

        var currentDropdownMenu = $(dropdownToggleButton).closest('.dropdown__menu').first().get(0);

        if(currentDropdownMenu !== undefined){
            // undefined when currentDropdownMenu is root
            var previousDropdownMenu = $(`.dropdown__toggle[data-multi-level-id="${currentDropdownMenu.dataset.multiLevelId}"]`).closest('.dropdown__menu').first().get(0);
        
            if( previousDropdownMenu === null || previousDropdownMenu === undefined){
                if(dropdownToggleButton.parentElement.classList.contains('dropdown--dropleft')){
                    previousDropdownMenuOpenedToLeft = true;
                }
            }
            else if(currentDropdownMenu.getBoundingClientRect().left < previousDropdownMenu.getBoundingClientRect().left){
                previousDropdownMenuOpenedToLeft = true;
            }
        }

        if(nextLevelDropdownElement.classList.contains('dropdown__menu--submenu-left') || previousDropdownMenuOpenedToLeft){
            nextLevelDropdownElement.style.left = (parentDropdownBoundingClientRect.left - nextLevelDropdownElement.offsetWidth) + "px";
        }
        else {
            nextLevelDropdownElement.style.left = parentDropdownBoundingClientRect.right + "px";
        }
    }
}

sdDropdown.$inject = ['$window'];
function sdDropdown($window) {
    return {
        link: function (scope, elem) {
            var menu = elem.children('.dropdown__menu');

            var settings = {
                isTopOriented: menu.hasClass('dropdown--dropup'),
                isRightOriented: menu.hasClass('dropdown--align-right'),
                isInlineOrientedRight: elem.hasClass('dropdown--dropright'),
                isInlineOrientedLeft: elem.hasClass('dropdown--dropleft')
            }, button;

            function closeToBottom() {
                return button && button.offset() ?
                        $window.innerHeight - (button.offset().top - $window.scrollY) <
                        menu.outerHeight() + button.outerHeight() : false;
            }

            function closeToTop() {
                return button && button.offset() ?
                        button.offset().top - $window.scrollY < menu.outerHeight() + button.outerHeight() : false;
            }

            function closeToLeft() {
                return checkEnvironment() === 'authoring' ?
                        elem.offset().left - $('#authoring-container').offset().left < menu.outerWidth() :
                        elem.offset().left < menu.outerWidth();
            }

            function closeToRight() {
                return button && button.offset() ?
                        $window.innerWidth - button.offset().left - button.outerWidth() < menu.outerWidth() : false;
            }

            function checkEnvironment() {
                return elem.parents('#authoring-container').length ? 'authoring' : false;
            }

            elem.bind('click', function(event){
                handleDisplayingAndPositioningOfDropdowns(event);
            });

            elem.bind('mouseenter', handleDisplayingAndPositioningOfDropdowns);

            if (elem.hasClass('dropdown--hover')) {
                elem.bind('mouseover', doTheMath);
            }
        }
    };
}

sdDropdownAppendToBody.$inject = ['$window', '$timeout'];
function sdDropdownAppendToBody($window, $timeout) {
    return {
        require: 'dropdown',
        link: function (scope, elem, attr, ctrl) {
            var button = elem.find('[dropdown__toggle]'),
                    topOffset = 48;

            function closeToRight(menu, inline) {
                return $window.innerWidth - elem.offset().left < menu.outerWidth() + (inline ? button.outerWidth() : 0);
            }

            function closeToTop(menu) {
                return button.offset().top < menu.outerHeight() + button.outerHeight();
            }

            function closeToBottom(menu) {
                return $window.innerHeight - (button.offset().top - $window.scrollY) <
                        menu.outerHeight() + button.outerHeight();
            }

            scope.$watch(ctrl.isOpen, function (isOpen) {
                if (!isOpen) {
                    return false;
                }

                var style = {
                    display: isOpen ? 'block' : 'none',
                    top: elem.offset().top + button.outerHeight(),
                    left: elem.offset().left,
                    opacity: 1
                };

                scope.$evalAsync(function () {
                    ctrl.dropdownMenu.css({opacity: 0, display: 'none'});
                });

                $timeout(function () {
                    scope.$applyAsync(function () {
                        // Check if menu is near bottom edge
                        if (closeToBottom(ctrl.dropdownMenu)) {
                            style.top = elem.offset().top - ctrl.dropdownMenu.outerHeight();
                        } else {
                            style.top = elem.offset().top + button.outerHeight();
                        }

                        // Check if element is right aligned
                        if (elem.hasClass('dropdown--align-right')) {
                            style.left = elem.offset().left - ctrl.dropdownMenu.outerWidth() + button.outerWidth();
                        }

                        // Check if menu is near right edge
                        if (closeToRight(ctrl.dropdownMenu)) {
                            style.left = elem.offset().left - ctrl.dropdownMenu.outerWidth() - 15;
                        }

                        // Check if menu is near top and bottom edge
                        if (closeToTop(ctrl.dropdownMenu) && !elem.hasClass('dropdown--dropup')) {
                            style.top = topOffset;
                            style.left = !closeToRight(ctrl.dropdownMenu, true) ?
                                    elem.offset().left + button.outerWidth() :
                                    elem.offset().left - ctrl.dropdownMenu.outerWidth() - 15;
                        }

                        // Apply modified css to dropdown menu element
                        ctrl.dropdownMenu.css(style);
                    });
                }, 150, false);
            });
        }
    };
}

angular.module('superdesk-ui.dropdown', [])
        .directive('dropdown', sdDropdown)
        .directive('dropdownAppendToBody', sdDropdownAppendToBody);