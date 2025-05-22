import * as React from 'react';

import {
    AuthoringMainContainer,
    AuthoringMainToolBar,
    AuthoringMainContent,
    AuthoringInnerHeader,
    AuthoringInnerBody,
    AuthorinInnerSideBar,
} from './';

export type HeaderPadding = {
    inlineStart?: React.CSSProperties['padding'];
    inlineEnd?: React.CSSProperties['padding'];
    top?: React.CSSProperties['padding'];
    bottom?: React.CSSProperties['padding'];
};

interface IProps {
    toolBar?: React.ReactNode;
    authoringMain?: React.ReactNode;
    authoringHeader?: React.ReactNode;
    authoringBookmarks?: React.ReactNode;
    headerCollapsed?: boolean;
    hideCollapseButton?: boolean;
    headerPadding?: HeaderPadding;
    toolbarCustom?: boolean;
    noPaddingForContent?: boolean;
}

export class AuthoringMain extends React.PureComponent<IProps> {
    render() {
        return (
            <AuthoringMainContainer>
                {this.props.toolBar && (
                    <AuthoringMainToolBar toolbarCustom={this.props.toolbarCustom}>
                        {this.props.toolBar}
                    </AuthoringMainToolBar>
                )}
                <AuthoringMainContent>
                    {this.props.authoringHeader && (
                        <AuthoringInnerHeader
                            hideCollapseButton={this.props.hideCollapseButton}
                            headerPadding={this.props.headerPadding}
                            collapsed={this.props.headerCollapsed}
                        >
                            {this.props.authoringHeader}
                        </AuthoringInnerHeader>
                    )}
                    {this.props.authoringBookmarks && (
                        <AuthorinInnerSideBar>{this.props.authoringBookmarks}</AuthorinInnerSideBar>
                    )}
                    <AuthoringInnerBody noPadding={this.props.noPaddingForContent}>
                        {this.props.children}
                    </AuthoringInnerBody>
                </AuthoringMainContent>
            </AuthoringMainContainer>
        );
    }
}
