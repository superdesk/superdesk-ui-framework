'use strict';

sdModal.$inject = ['$document'];
function sdModal($document) {
    return {
        template: [
            '<div class="modal" data-backdrop="static">',
            '<div class="modal__dialog" ng-if="model"><div class="modal__content" ng-transclude></div></div>',
            '</div>'].join(''),
        transclude: true,
        scope: {
            model: '='
        },
        link: function (scope, element) {
            var content, _initialized = false;

            scope.$watch('model', function () {
                if (scope.model) {
                    if (!initialized()) {
                        content = element.children();
                        content.addClass(element.attr('class'));
                        content.appendTo($document.find('body'));
                        content[0].foo = 'bar';
                        _initialized = true;
                    }
                content.show().addClass('in');
                $document.find('body').addClass('modal-open');
                } else if (initialized()) {
                    content.hide().removeClass('in');
                    $document.find('body').removeClass('modal-open');
                    closeModal();
                }
            });

            var closeModal = function () {
                scope.model = false;
                scope.$evalAsync();
            };

            function initialized() {
                return _initialized && content;
            }

            scope.$on('$destroy', function () {
                if (initialized()) {
                    content.hide();
                    content.remove();
                }
            });
        }
    };
}

angular.module('superdesk-ui.modals', [])
        .directive('sdModal', sdModal);