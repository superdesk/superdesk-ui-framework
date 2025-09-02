import * as React from 'react';
interface IProps {
    active: boolean;
    'data-test-id'?: string;
}
export declare function findParent(element: HTMLElement | null): HTMLElement | null;
export declare class WithPortal extends React.Component<IProps> {
    private ref;
    private dataTheme;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
