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
            dark: '=',
            boxed: '=',
            label: '@',
            maxlength: '=',
            disabled: '=',
            required: '=',
            placeholder: '@',
            transclude: '=',
            onchange: '&',
            onblur: '&',
        },
        link: (scope, elem, attrs, ngModel) => {
            scope.update = (value) => {
                ngModel.$setViewValue(value);

                return scope.onchange();
            };
        }
    };
}

angular.module('superdesk-ui.lineInput', [])
        .directive('sdLineInput', LineInputDirective);
