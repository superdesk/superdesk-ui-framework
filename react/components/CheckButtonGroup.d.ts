import * as React from 'react';
interface IProps {
    orientation?: 'horizontal' | 'vertical';
    grid?: boolean;
    align?: 'start' | 'end' | 'center' | 'inline';
    padded?: boolean;
    groupLabel?: string;
    groupLabelledBy?: string;
}
export declare class CheckButtonGroup extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
