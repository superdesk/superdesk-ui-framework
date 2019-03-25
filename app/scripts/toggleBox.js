/* eslint-disable */

/**
 * Gives toggle functionality to the box
 *
 * Usage:
 * <div sd-toggle-box data-title="Some title" data-open="true" data-icon="list"></div>
 *
 */
function ToggleBoxDirective() {
    return {
        template: '<toggle-box-next ng-if="loaded" data-title="title" mode="mode" style="style" is-open="isOpen"><div><div ng-transclude></div></div></toggle-box-next>',
        transclude: true,
        scope: {

        },
        link: function ($scope, element, attrs) {
            $scope.isOpen = attrs.open === 'true';
            $scope.mode = attrs.mode;
            $scope.style = attrs.style;
            $scope.toggleModule = function () {
                $scope.isOpen = !$scope.isOpen;
            };
            attrs.$observe('title', (title) => {
                $scope.title = title;
                $scope.loaded = true;
            });

        }
    };
}

angular.module('superdesk-ui.toggleBox', [])
    .directive('sdToggleBox', ToggleBoxDirective);
