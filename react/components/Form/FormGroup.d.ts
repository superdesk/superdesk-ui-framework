import * as React from 'react';
interface IProps {
    children: React.ReactNode;
    rows?: boolean;
    orientation?: 'horizontal' | 'vertical';
    spaces?: 'default' | 'condensed' | 'relaxed';
    marginBottom?: '0' | '1' | '2' | '3' | '4';
    inlineLabel?: boolean;
}
export declare class FormGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
