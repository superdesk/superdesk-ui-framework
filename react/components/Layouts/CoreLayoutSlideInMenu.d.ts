import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    theme?: string;
    menuOpen?: boolean;
    menuId?: string;
}
export declare class CoreLayoutSlideInMenu extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
