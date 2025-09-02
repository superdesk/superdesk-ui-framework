import * as React from 'react';
interface IProps {
    size?: 'mini' | 'small' | 'medium' | 'large';
    border?: boolean;
}
export declare class Divider extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
