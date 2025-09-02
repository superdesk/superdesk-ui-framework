import * as React from 'react';
interface IProps<T> {
    items: Array<T>;
    kind: {
        mode: 'single-select';
        getBorderColor?(item: T): string;
    } | {
        mode: 'multi-select';
        getBackgroundColor?(item: T): string;
    };
    getLabel(item: T): string;
    valueTemplate?(item: T, Wrapper?: React.ElementType): React.ComponentType<T> | JSX.Element | undefined;
}
export declare class SelectPreview<T> extends React.Component<IProps<T>> {
    render(): JSX.Element;
}
export {};
