import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    menuOpen?: boolean;
    heading?: string;
    onClick(): void;
    active?: boolean;
    ariaControls?: string;
    buttonAnimation?: 'spin' | 'squeeze' | 'none';
}
export declare class CoreLayoutTopMenu extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
