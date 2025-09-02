import * as React from 'react';
interface IProps {
    id?: string;
    icon: string;
    ariaValue: string;
    toolTipFlow?: 'top' | 'left' | 'right' | 'down';
    toolTipAppend?: boolean;
    size?: 'default' | 'small' | 'x-large';
    style?: 'default' | 'outline' | 'outlineWhite';
    disabled?: boolean;
    onClick(event: React.MouseEvent): void;
}
export declare class IconButton extends React.PureComponent<IProps> {
    static defaultProps: {
        toolTipAppend: boolean;
    };
    render(): JSX.Element;
}
export {};
