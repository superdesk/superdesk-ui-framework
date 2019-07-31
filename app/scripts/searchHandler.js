/* eslint-disable */

/**
 * Creates wrapper for sd-line-input
 *
 * Usage:
 * <sd-search-handler ng-model="query.name" data-debounce="200" data-button="true" data-label="Search" data-borderleft="true"></sd-search-handler>
 * 
 * 'data-button' is used to show/hide search arrow button 
 * 'data-borderleft' is used if you need left border instead of right (default one)
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
            button: '=',
            borderleft: '=',
            debounce: '@'
        },
        link: (scope, elem, attrs, ngModel) => {
            scope.update = (value) => {
                ngModel.$setViewValue(value);
            };
            scope.clearInput = () => {
                scope.model = '';
                scope.update();
            }
        }
    };
}

angular.module('superdesk-ui.searchHandler', [])
        .directive('sdSearchHandler', SearchHandlerDirective);
