/* eslint-disable */

/**
 * Creates wrapper for sd-line-input
 *
 * Usage:
 * <div sd-search-handler data-title="Some title" data-open="true" data-icon="list"></div>
 *
 */
function SearchHandlerDirective() {
    return {
        template: require('../template/search-handler.html'),
        replace: true,
        transclude: true,
        require: '?ngModel',
        scope: {
            model: '=ngModel',
            label: '@',
            debounce: '@'
        },
        link: (scope, elem, attrs, ngModel) => {
            scope.update = (value) => {
                ngModel.$setViewValue(value);
            };
        }
    };
}

angular.module('superdesk-ui.searchHandler', [])
        .directive('sdSearchHandler', SearchHandlerDirective);
