/* eslint-disable */

SplitterDirective.$inject = ['$window']
function SplitterDirective($window) {
    return {
        link: function (scope, elem, attr) {
            let splitter;
            
            elem[0].addEventListener('mousedown', mouseDownHandler);

            document.body.addEventListener('mouseup', () => {
                document.body.removeEventListener('mousemove', handleScroller);
            });

            function mouseDownHandler() {
                splitter = document.getElementById(attr.sdSplitter);
                document.body.addEventListener('mousemove', handleScroller);
            }

            function handleScroller(event) {
                let size = splitter.offsetWidth - event.movementX;

                if (size <= attr.splitterMax && size >= attr.splitterMin) {
                    splitter.style.width = size + 'px';

                    $window.dispatchEvent(new Event('resize'));
                }
            }

            scope.$on('$destroy', () => {
                elem[0].removeEventListener('mousedown', mouseDownHandler);
            });
        }
    };
}

angular.module('superdesk-ui.splitter', [])
    .directive('sdSplitter', SplitterDirective);
