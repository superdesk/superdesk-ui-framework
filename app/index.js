import './templates-cache.generated';

import './scripts';
import './react-ui';
import './styles';

// Will be overwriten by templates-cache.generated
angular.module('superdesk-ui.templates-cache', []);

export default angular.module('superdesk-ui', [
    'superdesk-ui.templates-cache',
    'superdesk-ui.helper',
    'superdesk-ui.carousel',
    'superdesk-ui.wizard',
    'superdesk-ui.dropdown',
    'superdesk-ui.modals',
    'superdesk-ui.switch',
    'superdesk-ui.check',
    'superdesk-ui.toggleBox'
]);
