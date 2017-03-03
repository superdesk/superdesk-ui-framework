'use strict';

angular.module('ui-docs', [
    'superdesk-ui'
]).directive('prettyprint', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {

            // Remove leading whitespaces
            var str = element[0].innerHTML;
            var pos = 0;
            var sum = 0;
            while (str.charCodeAt(pos) === 32) {
                sum = sum + 1;
                pos = pos + 1;
            }
            var pattern = '\\s{' + sum + '}';
            var spaces = new RegExp(pattern, 'g');
            element[0].innerHTML = str.replace(spaces, '\n');

            // Remove ng-non-bindable from code
            element.find('[ng-non-bindable=""]').each(function (i, val) {
                $(val).removeAttr('ng-non-bindable');
            });

            var langExtension = attrs['class'].match(/\blang(?:uage)?-([\w.]+)(?!\S)/);
            if (langExtension) {
                langExtension = langExtension[1];
            }

            element.html(window.prettyPrintOne(_.escape(element.html()), langExtension, true));
        }
    };

}).directive('docTabs', function () {
    return {
        link: function (scope, elem, attr, ctrl) {
            elem.find('.docs-page__window-bar').children('a').click(function (e) {
                e.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
                elem.find('.docs-page__code-' + $(this).attr('id')).show().siblings().hide();
            });
        }
    };

}).directive('docNav', function ($window) {
    return {
        link: function (scope, elem, attr, ctrl) {
            elem.find('a[href*="#"]:not([href="#"])').click(function () {
                var target = $(this.hash);
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            });

            angular.element($window).bind("scroll", onScroll);

            function onScroll() {
                var scrollPos = $(document).scrollTop();
                elem.find('a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.position() && refElement.position().top <= scrollPos + 20 && refElement.position().top + refElement.height() > scrollPos) {
                        elem.find('a').removeClass("active");
                        currLink.parent().addClass("active");
                    } else {
                        currLink.parent().removeClass("active");
                    }
                });
            }
        }
    };
}).directive('docModal', function (sdModalService) {
    return {
        link: function (scope) {
            scope.modalActive = false;

            scope.openModal = function (obj) {
                scope[obj] = true;
            };

            scope.closeModal = function (obj) {
                scope[obj] = false;
            };

            var modal;
            scope.openTemplateModal = function () {
                modal = sdModalService.open({
                    template: 'templates/modal-template.html',
                    scope: scope
                });
            };

            scope.close = function () {
                modal.close();
            };
        }
    };
}).directive('scroll', function ($window) {
    return function (scope, element, attrs) {

        angular.element($window).bind('scroll', function () {
            if (this.pageYOffset >= 80) {
                scope.boolChangeClass = true;
            } else {
                scope.boolChangeClass = false;
            }
            scope.$apply();
        });
    };
});