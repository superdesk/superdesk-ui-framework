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
        controller: ['$scope', 'WizardHandler', '$timeout',
            function ($scope, WizardHandler, $timeout) {
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
                    const execute = () => {
                        unselectAll();
                        $scope.selectedStep = step;
                        if (!_.isUndefined($scope.currentStep)) {
                            $scope.currentStep = step.code;
                        }
                        step.selected = true;
                    };

                    if (typeof $scope.canTabChange === 'function') {
                        $scope.canTabChange().then((result) => {
                            if (result === true) {
                                // using $timeout as safe apply so that there is no "digest already in progress" error
                                $timeout(() => execute());
                            }
                        });
                    } else {
                        execute();
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