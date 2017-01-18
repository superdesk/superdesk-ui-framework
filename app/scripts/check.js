'use strict';

sdCheck.$inject = [];
function sdCheck() {
    return {
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: '<span><span class="sd-checkbox"></span><label ng-transclude></label></span>',
        link: function ($scope, element, attrs, ngModel) {
            var label = element.find('label'),
                    checkbox = element.find('span');

            ngModel.$render = function () {
                render(label, checkbox, ngModel.$viewValue);
            };

            $scope.$watch(attrs.ngModel, function () {
                render(label, checkbox, ngModel.$viewValue);
            });

            element.on('click', function () {
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
                }

                checkbox.toggleClass('checked', !!value).attr('checked', !!value);

                if (attrs.labelPosition !== 'inside') {
                    label.toggleClass('label--active', !!value);
                }
            }

            if (attrs.labelPosition === 'inside') {
                checkbox.append(label).addClass('sd-checkbox sd-checkbox--button-style');
            } else if (attrs.labelPosition === 'left') {
                label.after(checkbox);
            }
        }
    };
}

angular.module('superdesk-ui.check', [])
        .directive('sdCheck', sdCheck);