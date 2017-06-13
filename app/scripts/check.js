'use strict';

sdCheck.$inject = ['$parse'];
function sdCheck($parse) {
    return {
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: '<span class="sd-check__wrapper">' +
                '<span class="sd-checkbox"></span><label ng-transclude></label>' +
                '</span>',
        link: function ($scope, element, attrs, ngModel) {
            var label = element.find('label'),
                    checkbox = element.find('span');

            if ($parse(attrs.ngChecked)($scope)) {
                attrs.type === 'radio' ?
                        ngModel.$setViewValue(attrs.ngValue) :
                        ngModel.$setViewValue(!ngModel.$viewValue);
            }

            ngModel.$render = function () {
                render(label, checkbox, ngModel.$viewValue);
            };

            $scope.$watch(attrs.ngModel, function () {
                render(label, checkbox, ngModel.$viewValue);
            });

            element.on('click', function () {
                if (attrs.disabled) {
                    return false;
                }

                $scope.$apply(function () {
                    if (attrs.type === 'radio') {
                        return ngModel.$setViewValue(attrs.ngValue);
                    }

                    return ngModel.$setViewValue(!ngModel.$viewValue);
                });
            });

            function render(label, checkbox, value) {
                if (attrs.type === 'radio') {
                    value = ngModel.$viewValue === attrs.ngValue;
                    checkbox.addClass('sd-checkbox--radio');
                }

                if (attrs.disabled) {
                    checkbox.addClass('sd-checkbox sd-checkbox--disabled');
                    label.addClass('sd-label--disabled');
                }

                checkbox.toggleClass('checked', !!value).attr('checked', !!value);

                if (attrs.labelPosition !== 'inside') {
                    label.toggleClass('label--active', !!value);
                }
            }

            if (attrs.labelPosition === 'inside') {
                checkbox.html(label).addClass('sd-checkbox sd-checkbox--button-style');
            } else if (attrs.labelPosition === 'left') {
                label.after(checkbox);
            }
        }
    };
}

angular.module('superdesk-ui.check', [])
        .directive('sdCheck', sdCheck);