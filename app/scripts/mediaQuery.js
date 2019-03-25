/* eslint-disable */

MediaQuery.$inject = ['$window'];
function MediaQuery($window) {
    return {
        link: function (scope, elem, attr) {
            let window = angular.element($window),
                resize = _.debounce(handleResize, 150);

            window.on('resize', resize);

            function handleResize() {
                let width = elem.width();

                if (width < attr.minWidth) {
                    elem.removeClass('comfort').addClass('compact');

                } else if (width > attr.maxWidth) {
                    elem.removeClass('compact').addClass('comfort');

                } else {
                    elem.removeClass('compact comfort');
                }
            }

            scope.$on('$destroy', () => {
                window.off('resize', resize);
            });

            resize();
        }
    };
}

angular.module('superdesk-ui.mediaQuery', [])
    .directive('sdMediaQuery', MediaQuery);
