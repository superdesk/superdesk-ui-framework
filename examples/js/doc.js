/* eslint-disable */
/* global _, PR */

import { ReactDoc, ReactPlayground } from './../pages/react/Index';
import { HashRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';

import app from '../../package.json';

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

docPlayground.$inject = ['components', 'design', 'playgrounds', '$route'];
function docPlayground(components, design, playgrounds, $route) {
    return {
        link: function link(scope) {
            scope.version = app.version;
            scope.components = components;
            scope.design = design;
            scope.playgrounds = playgrounds;

            scope.page = $route.current.params.name;

            scope.items = [
                { name: 'just' },
                { name: 'some' },
                { name: 'cool' },
                { name: 'tags' }
            ];

            scope.freeItems = ['Audi', 'BMW', 'Opel', 'Hyundai'];

            scope.console = function (...data) {
                console.log(...data);
            }
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
                    template: require('../pages/components/modal-template.html'),
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

docReact.$inject = [];
function docReact() {
    return {
        link: function (scope, elem) {
            ReactDOM.render(
                <HashRouter>
                    <ReactDoc />
                </HashRouter>, elem[0]);
        }
    };
}

docReactPlayground.$inject = ['playgrounds'];
function docReactPlayground(playgrounds) {
    return {
        link: function (scope, elem) {
            ReactDOM.render(
                <HashRouter>
                    <ReactPlayground playgrounds={playgrounds.react} />
                </HashRouter>, elem[0]);
        }
    };
}

docGifImg.$inject = [];
function docGifImg() {
    return {
        scope: {
            src: '@'
        },
        template: '<img src="{{activeImage}}" ng-click="playGif()" />',
        link: function (scope) {
            scope.image = scope.src.replace('.gif', '.png');
            scope.animation = scope.src;

            // Default settings
            scope.played = false;
            scope.activeImage = scope.image;

            scope.playGif = () => {
                if (scope.played) {
                    scope.activeImage = scope.image;
                    scope.played = false;
                } else {
                    scope.activeImage = scope.animation;
                    scope.played = true;
                }
            };
        }
    };
}

export default angular.module('ui-docs.directives', [])
    .directive('prettyprint', docPrettyPrint)
    .directive('docPlayground', docPlayground)
    .directive('docTabs', docTabs)
    .directive('docNav', docNav)
    .directive('docModal', docModal)
    .directive('docReact', docReact)
    .directive('docReactPlayground', docReactPlayground)
    .directive('docGifImg', docGifImg);
