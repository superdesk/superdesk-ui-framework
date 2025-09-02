import * as React from 'react';
interface IProps {
    text: string | undefined | null;
    flow?: 'top' | 'left' | 'right' | 'down';
    children(options: {
        attributes: {
            [name: string]: string;
        };
    }): React.ReactNode;
}
export declare class WithTooltip extends React.PureComponent<IProps> {
    private id;
    private instance;
    constructor(props: IProps);
    private setupTooltip;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.ReactNode;
}
export declare class Tooltip extends React.PureComponent<Omit<IProps, 'children'>> {
    render(): JSX.Element;
}
export {};
