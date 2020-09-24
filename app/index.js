import './scripts';
import './styles';

export {reactToAngular1} from './scripts/helpers/react-to-angular-1';
export {ToggleBoxNext} from './scripts/toggleBoxNext';
export {Positioner} from './scripts/positioner';


// TypeScript exports
// Must contain the same exports as in '../app-typescript/index'
export {
    HelloWorld,
    Button,
    ButtonGroup,
    Label,
    Badge,
    Alert,
    AvatarWrapper,
    AvatarContentText,
    AvatarContentImage,
    IconButton,
    IconLabel,
    Tooltip,
    DatePicker,
    DatePickerISO,
    TimePicker,
    FormLabel,
    Switch,
    Loader,
    Radio,
    CheckBox,
    RadioButton,
    CheckboxButton,
    CheckGroup,
    CheckButtonGroup,
    NavButton,
    Tab,
    TabList,
    Menu,
    SubNav,
    SlidingToolbar,
    StrechBar,
    PropsList,
    Prop,
    Icon,
    NotificationToast,
    Dropdown,
} from '../app-typescript/index';

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