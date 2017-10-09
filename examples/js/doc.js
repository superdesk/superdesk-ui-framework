/* eslint-disable */
/* global _, PR */

import React from 'react';
import ReactDOM from 'react-dom';

import ReactDoc from './reactDoc';

docPrettyPrint.$inject = [];
function docPrettyPrint() {
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

            element.html(PR.prettyPrintOne(_.escape(element.html()), langExtension, true));
        }
    };
}

docPlayground.$inject = ['components', '$route'];
function docPlayground(components, $route) {
    return {
        link: function link(scope) {
            scope.components = components;
            scope.playgrounds = _.filter($route.routes, (route) => _.has(route, 'templateUrl'));
            scope.route = $route;
        }
    };
}

docTabs.$inject = [];
function docTabs() {
    return {
        link: function link(scope, elem, attr, ctrl) {
            elem.find('.docs-page__window-bar').children('a').click(function (e) {
                e.preventDefault();
                $(this).addClass('active')
                        .siblings()
                        .removeClass('active');

                elem.find('.docs-page__code-' + $(this).attr('id')).show()
                        .siblings()
                        .hide();
            });
        }
    };
}

docNav.$inject = ['$window'];
function docNav($window) {
    return {
        link: function link(scope, elem, attr, ctrl) {
            scope.navigateTo = function (hash, e) {
                e.preventDefault();

                var target = $('#' + hash);

                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            };

            angular.element($window).bind('scroll', onScroll);

            function onScroll() {
                var scrollPos = $(document).scrollTop();

                elem.find('a').each(function () {
                    var currLink = $(this);
                    var refElement = $('#' + currLink.attr('href'));

                    if (refElement.position() && refElement.position().top <= scrollPos + 20 && refElement.position().top + refElement.height() > scrollPos) {
                        elem.find('a').removeClass('active');
                        currLink.parent().addClass('active');
                    } else {
                        currLink.parent().removeClass('active');
                    }
                });
            }
        }
    };
}

docModal.$inject = ['$modal'];
function docModal($modal) {
    return {
        link: function link(scope) {
            scope.modalActive = false;

            scope.openModal = function (obj) {
                scope[obj] = true;
            };

            scope.closeModal = function (obj) {
                scope[obj] = false;
            };

            var modal;

            scope.openTemplateModal = function () {
                modal = $modal.open({
                    templateUrl: 'templates/modal-template.html',
                    controller: docModalController,
                    size: 'large'
                });
            };

            scope.close = function () {
                modal.close('cancel');
            };

            function docModalController($scope) {
                $scope.data = 'Element binded inside controller';
            }

            scope.openCarousel = function () {
                scope.carouselActive = true;
            };

            scope.hideCarousel = function () {
                scope.carouselActive = false;
            };
        }
    };
}

docScroll.$inject = ['$window'];
function docScroll($window) {
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
}

reactPlayground.$inject = [];
function reactPlayground() {
    return {
        link: function (scope, elem) {
            ReactDOM.render(<ReactDoc />, elem[0]);
        }
    };
}

export default angular.module('ui-docs.directives', [])
        .directive('prettyprint', docPrettyPrint)
        .directive('docPlayground', docPlayground)
        .directive('docTabs', docTabs)
        .directive('docNav', docNav)
        .directive('docModal', docModal)
        .directive('docScroll', docScroll)
        .directive('reactPlayground', reactPlayground);