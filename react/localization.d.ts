interface ILocalization {
    translations: {
        today: string;
        clear: string;
    };
}
export declare let localization: ILocalization;
export declare function setupLocalization(val: ILocalization): void;
export {};
