import * as React from 'react';
interface IProps {
    icon?: boolean;
    iconSmall?: boolean;
    text?: string;
    heading?: string;
    className?: string;
    width?: 'auto' | 'full';
    type?: 'default' | 'primary' | 'highlight' | 'darker';
    state?: 'normal' | 'active';
    value?: 'button' | 'submit' | 'reset';
}
interface IState {
    dragClass: boolean;
    dropClass: boolean;
}
export declare class DropZone extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    drop(event: any): void;
    dragOver(event: any): void;
    dragEnter(event: any): void;
    dragLeave(event: any): void;
    render(): JSX.Element;
}
export {};
