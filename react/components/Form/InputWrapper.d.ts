import * as React from 'react';
export interface IInputCommon {
    label?: string;
    info?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    preview?: boolean;
    inlineLabel?: boolean;
    labelHidden?: boolean;
    tabindex?: number;
    /**
     * Defaults to `true`
     * If set to false, it will be as wide as content
     */
    fullWidth?: boolean;
    boxedStyle?: boolean;
    boxedLable?: boolean;
}
export interface IInputWrapper extends IInputCommon {
    invalid?: boolean;
    inputWrapper?: {
        kind: 'custom';
        component: React.ComponentType<{
            label: string;
            input: React.ReactNode;
            'data-test-id'?: string;
        }>;
    };
}
interface IProps extends IInputWrapper {
    children: React.ReactNode;
    maxLength?: number;
    value?: string | number;
    htmlId?: string;
    size?: 'medium' | 'large' | 'x-large';
    'data-test-id'?: string;
}
interface IState {
    value: string | number;
}
export declare class InputWrapper extends React.Component<IProps, IState> {
    constructor(props: IProps);
    render(): JSX.Element;
}
export {};
