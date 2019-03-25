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
            scope.playgrounds = _.filter($route.routes, (route) => _.has(route, 'templateUrl') && route.playground === 'main');
            scope.publisherPlaygrounds = _.filter($route.routes, (route) => _.has(route, 'templateUrl') && route.playground === 'publisher');
            scope.route = $route;

            scope.items = [
                { name: 'just' },
                { name: 'some' },
                { name: 'cool' },
                { name: 'tags' }
            ];
            
            scope.freeItems = ['Audi', 'BMW', 'Opel', 'Hyundai'];
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

docNav.$inject = ['components', '$rootScope'];
function docNav(components, $rootScope) {
    return {
        link: function link(scope, elem, attr, ctrl) {
            scope.isActive = (route) => {
                return $rootScope.$route.current && $rootScope.$route.current.params.name === route;
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
                    template: require('../templates/modal-template.html'),
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

docInclude.$inject = [];
function docInclude() {
    return {
        restrict: 'AE',
        templateUrl: function(elem, attrs) {
            return attrs.docInclude;
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
        .directive('reactPlayground', reactPlayground)
        .directive('docInclude', docInclude);