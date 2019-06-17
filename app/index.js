import './scripts';
import './styles';

export {reactToAngular1} from './scripts/helpers/react-to-angular-1';
export {ToggleBoxNext} from './scripts/toggleBoxNext';
export {Positioner} from './scripts/positioner';

import {Input} from './components/Form/Input';
import {Label} from './components/Form/Label';
import {LineInput} from './components/Form/LineInput';
import {Checkbox} from './components/Form/Checkbox';
import {Select} from './components/Form/Select';
import {TextArea} from './components/Form/TextArea';
import {TextInput} from './components/Form/TextInput';
import {TextAreaInput} from './components/Form/TextAreaInput';

export const Form = {
    Label,
    Input,
    LineInput,
    Checkbox,
    Select,
    TextArea,
    TextInput,
    TextAreaInput,
};

export default angular.module('superdesk-ui', [
    'superdesk-ui.helper',
    'superdesk-ui.carousel',
    'superdesk-ui.wizard',
    'superdesk-ui.dropdown',
    'superdesk-ui.positioner',
    'superdesk-ui.modals',
    'superdesk-ui.switch',
    'superdesk-ui.check',
    'superdesk-ui.circularProgress',
    'superdesk-ui.toggleBox',
    'superdesk-ui.toggleBoxNext',
    'superdesk-ui.tags',
    'superdesk-ui.lineInput',
    'superdesk-ui.searchHandler',
    'superdesk-ui.splitter',
    'superdesk-ui.mediaQuery',
]);
