import * as React from 'react';
interface IProps {
    children: React.ReactNode;
    flex?: boolean;
    noPadding?: boolean;
    smallPadding?: boolean;
    sPadding?: boolean;
    lPadding?: boolean;
    xlPadding?: boolean;
    inner?: boolean;
    bordered?: boolean;
    flexNew?: boolean;
}
export declare class FormRow extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
