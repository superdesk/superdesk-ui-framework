import './dateparser.helper';
import './datepicker.helper';
import './dropdown.helper';
import './modal.helper';
import './position.helper';
import './taginput.helper';

export default angular.module('superdesk-ui.helper', [
    'superdesk-ui.helper.dropdown',
    'superdesk-ui.helper.modal',
    'superdesk-ui.helper.datepicker',
    'superdesk-ui.helper.ngTagsInput'
]);