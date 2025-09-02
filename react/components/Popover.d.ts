import { PopperOptions } from 'popper.js';
import * as React from 'react';
interface IProps {
    title: string;
    triggerSelector: string;
    displayCloseButton?: boolean;
    placement?: PopperOptions['placement'];
}
export declare class Popover extends React.Component<IProps> {
    render(): JSX.Element;
}
export {};
