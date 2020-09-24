/* eslint-disable */

sdDropdown.$inject = ["$window"];
function sdDropdown($window) {
    return {
        link: function (scope, elem) {
            var menu = elem.children(".dropdown__menu");

            var settings = {
                    isTopOriented: menu.hasClass("dropdown--dropup"),
                    isRightOriented: menu.hasClass("dropdown--align-right"),
                    isInlineOrientedRight: elem.hasClass("dropdown--dropright"),
                    isInlineOrientedLeft: elem.hasClass("dropdown--dropleft"),
                },
                button;

            function closeToBottom() {
                return button && button.offset()
                    ? checkEnvironment().bottom <=
                          menu.outerHeight() + button.outerHeight()
                    : false;
            }

            function closeToTop() {
                return button && button.offset()
                    ? checkEnvironment().top <=
                          menu.outerHeight() + button.outerHeight()
                    : false;
            }

            function closeToLeft() {
                return checkEnvironment().left < menu.outerWidth();
            }

            function closeToRight() {
                return button && button.offset()
                    ? $window.innerWidth -
                          button.offset().left -
                          button.outerWidth() <=
                          menu.outerWidth()
                    : false;
            }

            function checkEnvironment() {
                let container = false;

                if (elem.parents("#authoring-container").length) {
                    container = "#authoring-container";
                } else if (elem.parents(".modal__body").length) {
                    container = ".modal__body";
                }

                return {
                    top: container
                        ? button.offset().top - $(container).offset().top
                        : button.offset().top,
                    left: container
                        ? elem.offset().left - $(container).offset().left
                        : elem.offset().left,
                    bottom: container
                        ? $(container).innerHeight() - button.offset().top
                        : $window.innerHeight -
                          (button.offset().top - $window.scrollY),
                };
            }

            elem.bind("click", doTheMath);

            if (elem.hasClass("dropdown--hover")) {
                elem.bind("mouseover", doTheMath);
            }

            function doTheMath() {
                button =
                    elem.find(".dropdown__toggle") ||
                    elem.find(".dropdown-toggle") ||
                    elem.find("[dropdown__toggle]");

                // Check if menu is near bottom edge
                if (closeToBottom()) {
                    elem.addClass("dropdown--dropup");
                } else {
                    elem.removeClass("dropdown--dropup");
                }

                // Check if menu is near top edge
                if (closeToTop()) {
                    elem.removeClass("dropdown--dropup");
                }

                // Check if menu is near left edge
                if (closeToLeft()) {
                    settings.isInlineOrientedRight ||
                    settings.isInlineOrientedLeft
                        ? elem
                              .removeClass("dropdown--dropleft")
                              .addClass("dropdown--dropright")
                        : menu.removeClass("dropdown--align-right");
                }

                // Check if menu is near right edge
                if (closeToRight()) {
                    settings.isInlineOrientedRight ||
                    settings.isInlineOrientedLeft
                        ? elem
                              .addClass("dropdown--dropleft")
                              .removeClass("dropdown--dropright")
                        : menu.addClass("dropdown--align-right");
                }

                if (closeToLeft() && closeToRight()) {
                    settings.isInlineOrientedRight ||
                    settings.isInlineOrientedLeft
                        ? elem
                              .removeClass("dropdown--dropleft")
                              .removeClass("dropdown--dropright")
                        : menu.removeClass("dropdown--align-right");
                }

                // If neither, return to initial state
                if (!closeToLeft() && !closeToRight()) {
                    if (settings.isInlineOrientedRight) {
                        elem.addClass("dropdown--dropright").removeClass(
                            "dropdown--dropleft"
                        );
                    } else if (settings.isInlineOrientedLeft) {
                        elem.addClass("dropdown--dropleft").removeClass(
                            "dropdown--dropright"
                        );
                    } else if (settings.isRightOriented) {
                        menu.addClass("dropdown--align-right");
                    } else {
                        menu.removeClass("dropdown--align-right");
                    }
                }
            }
        },
    };
}

sdDropdownAppendToBody.$inject = ["$window", "$timeout"];
function sdDropdownAppendToBody($window, $timeout) {
    return {
        require: "dropdown",
        link: function (scope, elem, attr, ctrl) {
            var button = elem.find("[dropdown__toggle]"),
                topOffset = 48;

            function closeToRight(menu, inline) {
                return (
                    $window.innerWidth - elem.offset().left <
                    menu.outerWidth() + (inline ? button.outerWidth() : 0)
                );
            }

            function closeToTop(menu) {
                return (
                    button.offset().top <
                    menu.outerHeight() + button.outerHeight()
                );
            }

            function closeToBottom(menu) {
                return (
                    $window.innerHeight -
                        (button.offset().top - $window.scrollY) <
                    menu.outerHeight() + button.outerHeight()
                );
            }

            scope.$watch(ctrl.isOpen, function (isOpen) {
                if (!isOpen) {
                    return false;
                }

                var style = {
                    display: isOpen ? "block" : "none",
                    top: elem.offset().top + button.outerHeight(),
                    left: elem.offset().left,
                    opacity: 1,
                };

                scope.$evalAsync(function () {
                    ctrl.dropdownMenu.css({ opacity: 0, display: "none" });
                });

                $timeout(
                    function () {
                        scope.$applyAsync(function () {
                            // Check if menu is near bottom edge
                            if (closeToBottom(ctrl.dropdownMenu)) {
                                style.top =
                                    elem.offset().top -
                                    ctrl.dropdownMenu.outerHeight();
                            } else {
                                style.top =
                                    elem.offset().top + button.outerHeight();
                            }

                            // Check if element is right aligned
                            if (elem.hasClass("dropdown--align-right")) {
                                style.left =
                                    elem.offset().left -
                                    ctrl.dropdownMenu.outerWidth() +
                                    button.outerWidth();
                            }

                            // Check if menu is near right edge
                            if (closeToRight(ctrl.dropdownMenu)) {
                                style.left =
                                    elem.offset().left -
                                    ctrl.dropdownMenu.outerWidth() -
                                    15;
                            }

                            // Check if menu is near top and bottom edge
                            if (
                                closeToTop(ctrl.dropdownMenu) &&
                                !elem.hasClass("dropdown--dropup")
                            ) {
                                style.top = topOffset;
                                style.left = !closeToRight(
                                    ctrl.dropdownMenu,
                                    true
                                )
                                    ? elem.offset().left + button.outerWidth()
                                    : elem.offset().left -
                                      ctrl.dropdownMenu.outerWidth() -
                                      15;
                            }

                            // Apply modified css to dropdown menu element
                            ctrl.dropdownMenu.css(style);
                        });
                    },
                    150,
                    false
                );
            });
        },
    };
}

angular
    .module("superdesk-ui.dropdown", [])
    .directive("dropdown", sdDropdown)
    .directive("dropdownAppendToBody", sdDropdownAppendToBody);

