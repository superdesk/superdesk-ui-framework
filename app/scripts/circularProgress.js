/* eslint-disable */

sdCircularProgress.$inject = [];
function sdCircularProgress() {
    return {
        scope: {
            value: '=',
            error: '=',
            counter: '='
        },
        template: require('../template/circular-progress.html'),
        link: function (scope, element) {
            let elem = $(element).find('.progress-svg');

            let width = elem.outerWidth();
            let strokeWidth = parseInt(elem.find('circle').css('strokeWidth'));

            setTimeout(() => {
                elem.find('circle').css('transition', 'stroke-dashoffset ease-in-out .3s');
            }, 500);
 
            scope.radius = (width / 2) - (strokeWidth / 2);
            scope.circumference = 2 * Math.PI * scope.radius;

            scope.$watch('error', (val) => {
                if (val) {
                    element.addClass('error');
                    scope.status = 'error';
                } else {
                    element.removeClass('error');
                    delete scope.status;
                }
            });
                
            scope.$watch('value', () => {
                if (!scope.value || scope.value < 0) {
                    scope.value = 0;

                } else if (scope.value >= 100) {
                    scope.value = 100;
                    element.addClass('completed');
                    scope.status = 'completed';
                } else {
                    element.removeClass('completed');
                    delete scope.status;
                }

                scope.dashOffset = scope.circumference * (1 - (scope.value / 100));
            });
        }
    };
}

angular.module('superdesk-ui.circularProgress', [])
        .directive('sdCircularProgress', sdCircularProgress);