import * as React from 'react';
interface IProps {
    color?: 'light' | 'darker' | 'blueGrey' | 'blueGreyDarker';
    theme?: 'light' | 'dark';
    className?: string;
    ['data-test-id']?: string;
}
interface IPropsDivider {
    width?: 'small' | 'medium' | 'large' | 'x-large';
}
export declare class SubNavDivider extends React.PureComponent<IPropsDivider> {
    render(): JSX.Element;
}
export declare class SubNav extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
