'use strict';

describe('ui-framework.switch module', function () {

    beforeEach(module('superdesk-ui.switch'));

    describe('switch directive', function () {
        it('should', inject(function ($compile, $rootScope) {
            var element = $compile("<sd-switch ng-model='test'></sd-switch>")($rootScope);

            expect(element.html()).toContain('<span class="inner"></span>');
        }));

    });
});