'use strict';

describe('superdesk ui framework', function () {

    beforeEach(function () {
        browser.get('/examples/');
    });

    it('open modal', function () {
        element(by.css('[ng-click="openModal(\'modalActive\')"] ')).click();
        expect(browser.getLocationAbsUrl()).toMatch('');
    });
});
