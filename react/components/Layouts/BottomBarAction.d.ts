import * as React from 'react';
interface IProps {
    arialabel?: string;
    ariaControls?: string;
    onClick(): void;
    active?: boolean;
    disabled?: boolean;
}
export declare class BottomBarAction extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
