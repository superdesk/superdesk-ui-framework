'use strict';
/**
 * The number of strings that would be outputted to UI would be quite small, thus we're using a simple approach
 * where `setTranslations` function will be called from superdesk-client-core and pass the translations.
 */
Object.defineProperty(exports, '__esModule', {value: true});
exports.translations = void 0;
exports.setTranslations = setTranslations;
exports.gettext = gettext;
exports.translations = {
    Close: 'Close',
    Search: 'Search',
    'No results found': 'No results found',
};
function setTranslations(_translations) {
    Object.assign(exports.translations, _translations);
}
function gettext(str) {
    var _a;
    return (_a = exports.translations[str]) !== null && _a !== void 0 ? _a : str;
}
