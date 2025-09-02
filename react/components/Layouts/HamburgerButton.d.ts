import * as React from 'react';
interface IProps {
    id?: string;
    arialabel?: string;
    ariaControls?: string;
    onClick(): void;
    active?: boolean;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
    disabled?: boolean;
}
export declare class HamburgerButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
