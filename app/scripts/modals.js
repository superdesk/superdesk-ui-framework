/* eslint-disable */

sdModal.$inject = ['$document', '$rootScope'];
function sdModal($document, $rootScope) {
    return {
        template: [
            '<div class="modal" data-backdrop="static">',
            '<div class="modal__dialog" ng-if="model"><div class="modal__content" ng-transclude></div></div>',
            '</div><div class="modal__backdrop fade in" ng-if="model"></div>'].join(''),
        transclude: true,
        scope: {
            model: '='
        },
        link: function (scope, element) {
            $rootScope.modals = $rootScope.modals ? $rootScope.modals : 0;
            var content, _initialized = false;

            scope.$watch('model', function () {
                if (scope.model) {
                    if (!initialized()) {
                        content = element.children();
                        content.addClass(element.attr('class'));
                        content.appendTo($document.find('body'));
                        content[0].style = 'z-index: ' + (1050 + $rootScope.modals);
                        content[1].style = 'z-index: ' + (1049 + $rootScope.modals);
                        _initialized = true;
                    }
                    content.show().addClass('in');
                    $document.find('body').addClass('modal-open');
                    $rootScope.modals++;
                } else if (initialized()) {
                    content.hide().removeClass('in');
                    $document.find('body').removeClass('modal-open');
                    closeModal();
                }
            });

            var closeModal = function () {
                scope.model = false;
                $rootScope.modals--;
                scope.$evalAsync();
            };

            $document.bind('keydown', (evt) => {
                if (evt.which === 27) {
                    closeModal();
                }
            });

            function initialized() {
                return _initialized && content;
            }

            scope.$on('$destroy', function () {
                if (initialized()) {
                    content.hide();
                    content.remove();
                    delete $rootScope.modals;
                }
            });
        }
    };
}

angular.module('superdesk-ui.modals', [])
    .directive('sdModal', sdModal);
