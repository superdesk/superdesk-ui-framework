import * as React from 'react';
interface IProps {
    id?: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    state?: 'normal' | 'active';
    value?: 'button' | 'submit' | 'reset';
    onClick(): void;
}
export declare class CreateButton extends React.PureComponent<IProps> {
    static defaultProps: {
        toolTipFlow: string;
    };
    render(): JSX.Element;
}
export {};
