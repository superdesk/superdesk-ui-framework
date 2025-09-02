import * as React from 'react';
interface IProps {
    id?: string;
    icon?: string;
    text?: string;
    iconSize?: 'small' | 'big';
    theme?: 'light' | 'dark';
    type?: 'default' | 'primary' | 'highlight' | 'darker' | 'dark';
    state?: 'normal' | 'active';
    value?: 'button' | 'submit' | 'reset';
    onClick(): void;
    badgeValue?: string;
}
export declare class NavButton extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
