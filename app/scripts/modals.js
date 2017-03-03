'use strict';

sdModal.$inject = ['$document'];
function sdModal($document) {
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

sdModalService.$inject = ['$rootScope', '$document', '$compile'];
function sdModalService($rootScope, $document, $compile) {
    var $modal, body = $document.find('body').eq(0);

    this.open = function (options) {
        $modal = {options: options};
        $modal.options.scope = options.scope || $rootScope.$new();
        $modal.id = $modal.options.scope.$id;
        appendModal($modal.id, $modal.options);
        $modal.close = function () {
            return removeModal($modal);
        };

        return $modal;
    };

    function appendModal(id, options) {
        body.append($compile('<div class="modal modal-' + id + ' ng-show" style="display: block;">' +
                '<div class="modal__dialog"><div class="modal__content" ng-include="\'' + options.template + '\'"></div></div>' +
                '</div><div class="modal__backdrop modal-' + id + ' fade in"></div>')(options.scope));

    }

    function removeModal(modal) {
        return $document.find('.modal-' + modal.id).remove();
    }
}

angular.module('superdesk-ui.modals', [])
        .service('sdModalService', sdModalService)
        .directive('sdModal', sdModal);