/* global _ */

TagInputDirective.$inject = ['$q'];
function TagInputDirective($q) {
    return {
        scope: {
            model: '=ngModel',
            items: '=',
            field: '@',
            label: '@',
            freetext: '=',
            required: '=',
            onChange: '&',
            keyProperty: '@',
            replaceSpacesWithDashes: '=?',
            minLength: '=',
            maxLength: '=',
            placeholder: '@',
            maxResultsToShow: '=',
        },
        require: '?ngModel',
        template: require('../template/tags.html'),
        link: function(scope) {
            scope.loadTags = (query) => $q((resolve, reject) => {
                let res = scope.items.filter((el) =>
                    scope.field ?
                        el[scope.field].toLowerCase().indexOf(query.toLowerCase()) > -1 :
                        el.toLowerCase().indexOf(query.toLowerCase()) > -1
                );

                resolve(res);
            });
        },
    };
}

angular.module('superdesk-ui.tags', [])
    .directive('sdTagInput', TagInputDirective);