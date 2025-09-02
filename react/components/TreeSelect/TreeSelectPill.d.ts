import * as React from 'react';
interface IProps<T> {
    item: T;
    readOnly?: boolean;
    disabled?: boolean;
    backgroundColor: string | undefined;
    onRemove(): void;
    valueTemplate?(item: T, Wrapper: React.ElementType): React.ComponentType<T> | JSX.Element;
    getBackgroundColor?(item: T): string;
    draggable?: boolean;
}
export declare class TreeSelectPill<T> extends React.Component<IProps<T>> {
    render(): JSX.Element;
}
export {};
