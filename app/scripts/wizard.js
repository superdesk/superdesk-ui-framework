/* eslint-disable */

WizardHandlerFactory.$inject = [];
function WizardHandlerFactory() {
    var service = {};
    var wizards = {};

    service.defaultName = 'defaultWizard';

    service.addWizard = function (name, wizard) {
        wizards[name] = wizard;
    };

    service.removeWizard = function (name) {
        delete wizards[name];
    };

    service.wizard = function (name) {
        var nameToUse = name || service.defaultName;

        return wizards[nameToUse];
    };

    return service;
}

WizardDirective.$inject = [];
function WizardDirective() {
    return {
        template: require('../template/wizard.html'),
        scope: {
            currentStep: '=',
            finish: '&',
            name: '@',
            canTabChange: '&?'
        },
        transclude: true,
        controller: ['$scope', 'WizardHandler',
            function ($scope, WizardHandler) {
                WizardHandler.addWizard($scope.name || WizardHandler.defaultName, this);
                $scope.$on('$destroy', function () {
                    WizardHandler.removeWizard($scope.name || WizardHandler.defaultName);
                });

                $scope.selectedStep = null;
                $scope.steps = [];

                var stopWatch;

                this.addStep = function (step) {
                    $scope.steps.push(step);
                    if (!stopWatch) {
                        stopWatch = $scope.$watch('currentStep', function (stepCode) {
                            if (stepCode && ($scope.selectedStep && $scope.selectedStep.code !== stepCode
                                    || !$scope.selectedStep)) {
                                $scope.goTo(_.find($scope.steps, {code: stepCode}));
                            }
                        });
                    }

                    if (!$scope.selectedStep) {
                        this.goTo(0);
                    }
                };

                function unselectAll() {
                    _.each($scope.steps, function (step) {
                        step.selected = false;
                    });
                    $scope.selectedStep = null;
                }

                $scope.goTo = function (step) {
                    $scope.nextStep = step.code;

                    if ($scope.canChangeStep()) {
                        unselectAll();
                        $scope.selectedStep = step;
                        if (!_.isUndefined($scope.currentStep)) {
                            $scope.currentStep = step.code;
                        }
                        step.selected = true;
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

                    $scope.goTo($scope.steps[index - 1]);
                };

                this.finish = function () {
                    if ($scope.finish) {
                        $scope.finish();
                    }
                };

                this.goToNextStep = function() {
                    this.goTo($scope.nextStep);
                }

                $scope.canChangeStep = function () {
                    if ($scope.canTabChange) {
                        return $scope.canTabChange();
                    }
                    return true;
                }
            }]
    };
}

WizardStepDirective.$inject = [];
function WizardStepDirective() {
    return {
        template: require('../template/wizardStep.html'),
        scope: {
            title: '@',
            code: '@',
            disabled: '=',
            hide: '='
        },
        transclude: true,
        require: '^sdWizard',
        link: function ($scope, element, attrs, wizard) {
            wizard.addStep($scope);
        }
    };
}

angular.module('superdesk-ui.wizard', [])
        .factory('WizardHandler', WizardHandlerFactory)
        .directive('sdWizard', WizardDirective)
        .directive('sdWizardStep', WizardStepDirective);