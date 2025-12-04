/**
 * The number of strings that would be outputted to UI would be quite small, thus we're using a simple approach
 * where `setTranslations` function will be called from superdesk-client-core and pass the translations.
 */

export const translations = {
    Close: 'Close',
    Search: 'Search',
    Copy: 'Copy',
    'No results found': 'No results found',
};

export function setTranslations(_translations: typeof translations) {
    Object.assign(translations, _translations);
}

export function gettext(str: keyof typeof translations): string {
    return translations[str] ?? str;
}
