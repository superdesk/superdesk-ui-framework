/* eslint-disable */

/**
 * Creates wrapper for sd-line-input
 *
 * Usage:
 * <div sd-line-input data-title="Some title" data-open="true" data-icon="list"></div>
 *
 */
function LineInputDirective() {
    return {
        template: require('../template/line-input.html'),
        replace: true,
        transclude: true,
        require: '?ngModel',
        scope: {
            model: '=ngModel',
            sync: '=',
            dark: '=',
            boxed: '=',
            label: '@',
            maxlength: '=',
            disabled: '=',
            required: '=',
            textarea: '=',
            placeholder: '@',
            transclude: '=',
            onchange: '&',
            onblur: '&',
        },
        link: (scope, elem, attrs, ngModel) => {
            scope.modelFixed = {
                // when model is a primitive, two way binding doesn't work
                // https://stackoverflow.com/a/18128502/1175593
                value: scope.model,
            };
            scope.$watch('model', (model) => {
                if (scope.sync === true) {
                    scope.modelFixed.value = model;
                }
            });
            scope.update = (value) => {
                ngModel.$setViewValue(value);

                return scope.onchange();
            };
        }
    };
}

angular.module('superdesk-ui.lineInput', [])
        .directive('sdLineInput', LineInputDirective);
