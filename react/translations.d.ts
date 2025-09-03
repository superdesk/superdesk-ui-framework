/**
 * The number of strings that would be outputted to UI would be quite small, thus we're using a simple approach
 * where `setTranslations` function will be called from superdesk-client-core and pass the translations.
 */
export declare const translations: {
    Close: string;
    Search: string;
    'No results found': string;
};
export declare function setTranslations(_translations: typeof translations): void;
export declare function gettext(str: keyof typeof translations): string;
