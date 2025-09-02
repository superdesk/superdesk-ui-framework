import * as React from 'react';
interface IPropsButton {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    expand?: boolean;
    style?: 'filled' | 'hollow' | 'text-only';
    shape?: 'square' | 'round';
    isLoading?: boolean;
    loadingLabel?: string;
    tooltip?: string;
    id?: string;
    theme?: 'light' | 'dark';
    type?: 'default' | 'primary' | 'success' | 'warning' | 'alert' | 'highlight' | 'sd-green';
    size?: 'small' | 'normal' | 'large';
    textAlign?: 'start' | 'center' | 'end';
    children?: never;
    icon?: string;
    disabled?: boolean;
    iconOnly?: boolean;
    noMargin?: boolean;
    'data-test-id'?: string;
}
export declare class Button extends React.PureComponent<IPropsButton> {
    render(): JSX.Element;
}
export {};
