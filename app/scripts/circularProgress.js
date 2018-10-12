/* eslint-disable */

sdCircularProgress.$inject = [];
function sdCircularProgress() {
    return {
        scope: {
            value: '=',
            counter: '='
        },
        template: require('../template/circular-progress.html'),
        link: function (scope, elem) {
            let width = $(elem).find('.progress-svg').outerWidth();
            scope.radius = (width / 2) - (12 / 2);
            scope.circumference = 2 * Math.PI * scope.radius;
                
            scope.$watch('value', () => {
                if (!scope.value || scope.value < 0) {
                    scope.value = 0;

                } else if (scope.value > 100) {
                    scope.value = 100;
                }

                scope.dashOffset = scope.circumference * (1 - (scope.value / 100));
            });
        }
    };
}

angular.module('superdesk-ui.circularProgress', [])
        .directive('sdCircularProgress', sdCircularProgress);