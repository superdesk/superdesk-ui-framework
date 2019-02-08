import './scripts';
import './styles';

export {reactToAngular1} from './scripts/helpers/react-to-angular-1';
export {ToggleBoxNext} from './scripts/toggleBoxNext';
export {Dropdown2} from './scripts/dropdown2';

export default angular.module('superdesk-ui', [
    'superdesk-ui.helper',
    'superdesk-ui.carousel',
    'superdesk-ui.wizard',
    'superdesk-ui.dropdown',
    'superdesk-ui.dropdown2',
    'superdesk-ui.modals',
    'superdesk-ui.switch',
    'superdesk-ui.check',
    'superdesk-ui.circularProgress',
    'superdesk-ui.toggleBox',
    'superdesk-ui.toggleBoxNext',
    'superdesk-ui.tags',
    'superdesk-ui.lineInput',
    'superdesk-ui.searchHandler',
]);
