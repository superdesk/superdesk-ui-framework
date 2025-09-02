import * as React from 'react';
interface IProps {
    id?: string;
    className?: string;
    theme?: string;
    visible?: boolean;
    closeOnEscape?: boolean;
    contentBg?: 'default' | 'medium' | 'dark';
    contentPadding?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'x-large';
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    maximized?: boolean;
    maximizable?: boolean;
    headerTemplate?: JSX.Element | string;
    footerTemplate?: JSX.Element | string;
    'data-test-id'?: string;
    onShow?(): void;
    onHide?(): void;
}
export declare class Modal extends React.Component<IProps, {}> {
    private zIndex;
    render(): JSX.Element;
}
export {};
