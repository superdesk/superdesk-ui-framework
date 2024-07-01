// External Modules
import * as React from 'react';

import {
    HeaderPanel,
    LayoutContainer,
    LeftPanel,
    MainPanel,
    RightPanel,
    IMainPanelProps,
} from '../Layouts';

interface IProps {
    header?: React.ReactNode;
    main?: React.ReactNode;
    mainClassName?: string;
    mainProps?: Omit<IMainPanelProps, 'children'>;
    rightPanel?: React.ReactNode;
    rightPanelOpen?: boolean;
    leftPanel?: React.ReactNode;
    leftPanelOpen?: boolean;
    fullHeight?: boolean; // For cases where the parent container is not display: grid;
}

export class PageLayout extends React.PureComponent<IProps> {
    render() {
        return (
            <LayoutContainer fullHeight={this.props.fullHeight}>
                {this.props.header && (
                    <HeaderPanel>
                        {this.props.header}
                    </HeaderPanel>
                )}
                {this.props.leftPanel && (
                    <LeftPanel open={this.props.leftPanelOpen}>
                        {this.props.leftPanel}
                    </LeftPanel>
                )}
                {this.props.main && (
                    <MainPanel className={this.props.mainClassName} {...this.props.mainProps}>
                        {this.props.main}
                    </MainPanel>
                )}
                {this.props.rightPanel && (
                    <RightPanel open={this.props.rightPanelOpen}>
                        {this.props.rightPanel}
                    </RightPanel>
                )}
            </LayoutContainer>
        );
    }
}
