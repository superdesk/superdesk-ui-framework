import * as React from 'react';
interface IProps {
    illustration?: string;
    size?: 'small' | 'large';
    title: string;
    description?: string;
    absolutePositioned?: boolean;
}
export declare class EmptyState extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
