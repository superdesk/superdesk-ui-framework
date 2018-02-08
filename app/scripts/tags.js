TagInputDirective.$inject = ['$q'];

function TagInputDirective($q) {
    return {
        scope: {
            label: '@'
        },
        template: require('../template/tags.html'),
        link: function(scope, element, attrs, ctrl) {
            scope.tags = [
                { text: 'just' },
                { text: 'some' },
                { text: 'cool' },
                { text: 'tags' }
            ];

            scope.loadTags = (query) => {
                return $q((resolve, reject) => {
                    resolve(scope.tags);
                });
            }
        }
    };
}

angular.module('superdesk-ui.tags', [])
    .directive('sdTagInput', TagInputDirective);