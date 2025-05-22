interface ILocalization {
    translations: {
        today: string;
        clear: string;
    };
}

export let localization: ILocalization = {
    translations: {
        today: 'today',
        clear: 'clear',
    },
};

export function setupLocalization(val: ILocalization) {
    localization = val;
}
