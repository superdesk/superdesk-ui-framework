import * as React from 'react';
export interface IMainPanelProps {
    children?: React.ReactNode;
    className?: string;
    padding?: 'small' | 'medium' | 'large' | 'none';
    onScroll?(event: React.UIEvent<HTMLDivElement>): void;
    id?: string;
}
export declare class MainPanel extends React.PureComponent<IMainPanelProps> {
    render(): JSX.Element;
}
