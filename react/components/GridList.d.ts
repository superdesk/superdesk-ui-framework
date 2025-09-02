import * as React from 'react';
interface IProps {
    size?: 'x-small' | 'small' | 'medium' | 'large';
    margin?: '0' | '1' | '2' | '3';
    gap?: 'small' | 'medium' | 'large' | 'x-large';
}
export declare class GridList extends React.PureComponent<IProps> {
    static defaultProps: {
        size: string;
        gap: string;
    };
    render(): JSX.Element;
}
export {};
