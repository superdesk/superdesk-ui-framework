import * as React from 'react';
interface IProps {
    header?: React.ReactNode;
    main?: React.ReactNode;
    sideBar?: React.ReactNode;
    sideBarClosed?: boolean;
    sidePanel?: React.ReactNode;
    sideOverlay?: React.ReactNode;
    sideOverlayOpen?: boolean;
    sidePanelPinned?: boolean;
    sidePanelOpen?: boolean;
    leftPanel?: React.ReactNode;
    rightPanelOpen?: boolean;
    overlayPanel?: React.ReactNode;
}
export declare class AuthoringFrame extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export {};
