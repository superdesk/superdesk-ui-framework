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
        templateUrl: '../app/template/toggle-box.html',
        transclude: true,
        scope: true,
        link: function ($scope, element, attrs) {
            $scope.title = attrs.title;
            $scope.isOpen = attrs.open === 'true';
            $scope.mode = attrs.mode;
            $scope.style = attrs.style;
            $scope.toggleModule = function () {
                $scope.isOpen = !$scope.isOpen;
            };
        }
    };
}

angular.module('superdesk-ui.toggleBox', [])
        .directive('sdToggleBox', ToggleBoxDirective);
