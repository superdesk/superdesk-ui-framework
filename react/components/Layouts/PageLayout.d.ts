import * as React from 'react';
import {IMainPanelProps} from '../Layouts';
interface IProps {
    header?: React.ReactNode;
    main?: React.ReactNode;
    mainClassName?: string;
    mainProps?: Omit<IMainPanelProps, 'children'>;
    rightPanel?: React.ReactNode;
    rightPanelOpen?: boolean;
    leftPanel?: React.ReactNode;
    leftPanelOpen?: boolean;
    fullHeight?: boolean;
}
export declare class PageLayout extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
