// External Modules
import * as React from 'react';

import {
    AuthoringFrameContainer,
    AuthoringFrameMain,
    AuthoringFrameNavBar,
    AuthoringFrameLeftBar,
    AuthoringFrameRightBar,
    AuthoringFrameSidePanel,
    AuthoringFrameSidePanelOverlay,
    AuthoringFrameOverlay,
} from '.';

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

export class AuthoringFrame extends React.PureComponent<IProps> {
    render() {
        return (
            <AuthoringFrameContainer>
                {this.props.header && (
                    <AuthoringFrameNavBar>
                        {this.props.header}
                    </AuthoringFrameNavBar>
                )}
                {this.props.leftPanel && (
                    <AuthoringFrameLeftBar>
                        {this.props.leftPanel}
                    </AuthoringFrameLeftBar>
                )}
                {this.props.main && (
                    <AuthoringFrameMain>
                        {this.props.main}
                    </AuthoringFrameMain>
                )}
                {this.props.sidePanel && (
                    <AuthoringFrameSidePanel opened={this.props.sidePanelOpen} pinned={this.props.sidePanelPinned}>
                        {this.props.sidePanel}
                    </AuthoringFrameSidePanel>
                )}
                {this.props.sideOverlay && (
                    <AuthoringFrameSidePanelOverlay opened={this.props.sideOverlayOpen}>
                        {this.props.sideOverlay}
                    </AuthoringFrameSidePanelOverlay>
                )}
                {this.props.sideBar && (
                    <AuthoringFrameRightBar closed={this.props.sideBarClosed}>
                        {this.props.sideBar}
                    </AuthoringFrameRightBar>
                )}

                {this.props.overlayPanel && (
                    <AuthoringFrameOverlay>
                        {this.props.overlayPanel}
                    </AuthoringFrameOverlay>
                )}
            </AuthoringFrameContainer>
        );
    }
}
