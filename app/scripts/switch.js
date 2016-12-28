'use strict';

sdSwitch.$inject = [];
function sdSwitch() {
    return {
        require: 'ngModel',
        replace: true,
        template: [
            '<span class="sd-toggle">',
            '<span class="inner"></span>',
            '</span>'
        ].join(''),
        link: function ($scope, element, attrs, ngModel) {
            var Keys = {
                pageup: 33,
                pagedown: 34,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                enter: 13,
                escape: 27,
                space: 32,
                backspace: 8
            };

            ngModel.$render = function () {
                render(element, ngModel.$viewValue);
            };

            element.bind('keydown', function (e) {
                if (e.keyCode === Keys.enter || e.keyCode === Keys.space) {
                    e.preventDefault();
                    $scope.$apply(function () {
                        ngModel.$setViewValue(!ngModel.$viewValue);
                    });

                    return false;
                }
            });

            $scope.$watch(attrs.ngModel, function () {
                render(element, ngModel.$viewValue);
            });

            element.on('click', function (e) {
                $scope.$apply(function () {
                    ngModel.$setViewValue(!ngModel.$viewValue);
                });

                return false;
            });

            $scope.$on('$destroy', function () {
                element.unbind('keydown');
                element.off('click');
            });

            function render(element, value) {
                element.toggleClass('checked', !!value);
                element.attr('checked', !!value);
            }
        }
    };
}

angular.module('superdesk-ui.switch', [])
        .directive('sdSwitch', sdSwitch);