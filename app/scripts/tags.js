/* global _ */

TagInputDirective.$inject = ['$q'];
function TagInputDirective($q) {
    return {
        scope: {
            items: '=',
            field: '@',
            label: '@',
            freetext: '=',
            freetextOnly: '='
        },
        template: require('../template/tags.html'),
        link: function (scope) {
            scope.loadTags = (query) => {
                return $q((resolve, reject) => {
                    let res = scope.items.filter((el) =>
                        el[scope.field].toLowerCase().indexOf(query.toLowerCase()) > -1
                    );

                    resolve(res);
                });
            };
        }
    };
}

angular.module('superdesk-ui.tags', [])
        .directive('sdTagInput', TagInputDirective);