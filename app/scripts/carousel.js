/* global _ */

CarouselDirective.$inject = [];
function CarouselDirective() {
    return {
        scope: {
            currentStep: '=',
            finish: '&',
            model: '='
        },
        templateUrl: 'app/template/carousel.html',
        transclude: true,
        controllerAs: 'ctrl',
        controller: ['$scope', '$document', function ($scope, $document) {
            var self = this;
            $scope.selectedStep = null;
            $scope.pageIndex = 0;
            $scope.steps = [];

            $scope.goTo = function (step) {
                unselectAll();
                $scope.selectedStep = step;
                $scope.pageIndex = _.indexOf($scope.steps, step);
                if (!_.isUndefined($scope.currentStep)) {
                    $scope.currentStep = step.code;
                }
                step.selected = true;
            };

            this.addStep = function (step) {
                $scope.steps.push(step);
                $scope.$watch('currentStep', function (stepCode) {
                    if (stepCode && ($scope.selectedStep && $scope.selectedStep.code !== stepCode
                            || !$scope.selectedStep)) {
                        $scope.goTo(_.find($scope.steps, {code: stepCode}));
                    }
                });

                if (!$scope.selectedStep) {
                    this.goTo(0);
                }
            };

            this.goTo = function (step) {
                var stepTo;

                if (_.isNumber(step)) {
                    stepTo = $scope.steps[step];
                } else {
                    stepTo = _.find($scope.steps, {code: step});
                }
                $scope.goTo(stepTo);
            };

            this.next = function () {
                var index = _.indexOf($scope.steps, $scope.selectedStep);

                if (index === $scope.steps.length - 1) {
                    this.finish();
                } else {
                    $scope.goTo($scope.steps[index + 1]);
                }
            };

            this.previous = function () {
                var index = _.indexOf($scope.steps, $scope.selectedStep);

                if (index > 0) {
                    $scope.goTo($scope.steps[index - 1]);
                }
            };

            this.finish = function () {
                if ($scope.finish) {
                    $scope.finish();
                }
            };

            function unselectAll() {
                _.each($scope.steps, function (step) {
                    step.selected = false;
                });
                $scope.selectedStep = null;
            }

            $document.bind('keydown', function (e) {
                if (e.keyCode === 37) {
                    $scope.$applyAsync(function () {
                        self.previous();
                    });
                } else if (e.keyCode === 39) {
                    $scope.$applyAsync(function () {
                        self.next();
                    });
                }
            });

            $scope.$on('$destroy', function () {
                $document.unbind('keydown');
            });

        }],
        link: function (scope, elem) {
            scope.$watch('model', function () {
                if (scope.model) {
                    elem.show();
                } else {
                    elem.hide();
                }
            });
        }
    };
}

CarouselStepDirective.$inject = [];
function CarouselStepDirective() {
    return {
        scope: {
            code: '@'
        },
        template: '<div class="sd-carousel__page fade" ng-show="selected" ng-transclude></div>',
        transclude: true,
        replace: true,
        require: '^sdCarousel',
        link: function (scope, elem, attr, carousel) {
            carousel.addStep(scope);
        }
    };
}

angular.module('superdesk-ui.carousel', ['ngAnimate'])
        .directive('sdCarousel', CarouselDirective)
        .directive('sdCarouselStep', CarouselStepDirective);