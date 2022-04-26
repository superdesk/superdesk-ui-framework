/* eslint-disable */

sdModal.$inject = ['$document', '$rootScope'];
function sdModal($document, $rootScope) {
    return {
        template:
            `<div class="modal" data-theme="{{theme}}" data-backdrop="static" data-test-id="{{testId}}">
                <div class="modal__dialog" ng-if="model">
                    <div class="modal__content" ng-transclude></div>
                </div>
            </div>
            <div class="modal__backdrop fade in" ng-if="model"></div>`,
        transclude: true,
        scope: {
            model: '=',
            testId: '=?',
            theme: '@',
        },
        link: function (scope, element) {
            scope.testId = scope.testId || '';

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
                        console.log(content);
                    }
                    content.show().addClass('in');
                    $document.find('body').addClass('modal-open');
                    $rootScope.modals++;
                } else if (initialized()) {
                    content.hide().removeClass('in');
                    
                    // If multiple modals are opened,
                    // remove modal class only when last one is closed
                    if ($rootScope.modals === 1) {
                        $document.find('body').removeClass('modal-open');
                    }

                    closeModal();
                }
            });

            var closeModal = function () {
                scope.model = false;

                if ($rootScope.modals > 0) {
                    $rootScope.modals--;
                }
                
                scope.$evalAsync();
            };

            $document.bind('keydown', (evt) => {
                if (evt.which === 27 && $rootScope.modals > 0) {
                    evt.preventDefault();

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
