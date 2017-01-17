'use strict';

sdCheck.$inject = [];
function sdCheck() {
    return {
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: '<span class="sd-checkbox" ng-transclude></span>',
        link: function ($scope, element, attrs, ngModel) {
            ngModel.$render = function () {
                render(element, ngModel.$viewValue);
            };

            $scope.$watch(attrs.ngModel, function () {
                render(element, ngModel.$viewValue);
            });

            element.on('click', function (e) {
                $scope.$apply(function () {
                    ngModel.$setViewValue(!ngModel.$viewValue);
                });

                return false;
            });
            function render(element, value) {
                element.toggleClass('checked', !!value);
                element.attr('checked', !!value);
            };
        }
    };
}

angular.module('superdesk-ui.check', [])
        .directive('sdCheck', sdCheck);