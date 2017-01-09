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

            $scope.$watch(attrs.ngModel, () => {
                render(element, ngModel.$viewValue);
            });

            element.on('click', (e) => {
                $scope.$apply(() => {
                    ngModel.$setViewValue(!ngModel.$viewValue);
                });

                return false;
            });
        }
    };
}

angular.module('superdesk-ui.check', [])
        .directive('sdCheck', sdCheck);