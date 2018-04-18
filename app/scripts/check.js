/* eslint-disable */

sdCheck.$inject = ['$parse'];
function sdCheck($parse) {
    return {
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: '<span class="sd-check__wrapper">' +
                '<span class="sd-checkbox"></span><label ng-transclude></label></span>',
        link: function ($scope, element, attrs, ngModel) {
            var label = element.find('label'),
                    checkbox = element.find('span'),
                    isChecked = $parse(attrs.ngChecked)($scope);

            if (isChecked) {
                if (attrs.type === 'radio') {
                    ngModel.$setViewValue(attrs.ngValue);
                }

                if (attrs.ngTrueValue) {
                    ngModel.$setViewValue(attrs.ngTrueValue);
                }

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

                    if (attrs.ngTrueValue) {
                        return ngModel.$setViewValue(ngModel.$viewValue ===
                                attrs.ngTrueValue ? attrs.ngFalseValue : attrs.ngTrueValue);
                    }

                    return ngModel.$setViewValue(!ngModel.$viewValue);
                });
            });

            function render(label, checkbox, value) {
                if (attrs.type === 'radio') {
                    value = ngModel.$viewValue === attrs.ngValue;
                    checkbox.addClass('sd-checkbox--radio');
                }

                if (attrs.ngTrueValue) {
                    value = ngModel.$viewValue === attrs.ngTrueValue;
                }

                if (attrs.disabled) {
                    checkbox.addClass('sd-checkbox sd-checkbox--disabled');
                    label.addClass('sd-label--disabled');
                }

                if (attrs.icon) {
                    checkbox.html('<i class="icon-' + attrs.icon + '">').addClass('sd-checkbox sd-checkbox--button-style');
                }

                checkbox.toggleClass('checked', !!value).attr('checked', !!value);

                if (attrs.labelPosition !== 'inside') {
                    label.toggleClass('label--active', !!value);
                }
            }

            // CHECKBOX STYLING
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