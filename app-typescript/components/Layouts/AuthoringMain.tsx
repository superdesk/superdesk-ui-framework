import * as React from 'react';

import {
    AuthoringMainContainer,
    AuthoringMainToolBar,
    AuthoringMainContent,
    AuthoringInnerHeader,
    AuthoringInnerBody,
    AuthorinInnerSideBar,

} from './';

interface IProps {
    toolBar?: React.ReactNode;
    authoringMain?: React.ReactNode;
    authoringHeader?: React.ReactNode;
    authoringBookmarks?: React.ReactNode;
    headerCollapsed?: boolean;
    headerPadding?: 'small' | 'medium' | 'large';
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
                        headerPadding={this.props.headerPadding}
                        collapsed={this.props.headerCollapsed}>
                            {this.props.authoringHeader}
                    </AuthoringInnerHeader>
                    )}
                    {this.props.authoringBookmarks && (
                        <AuthorinInnerSideBar>
                            {this.props.authoringBookmarks}
                        </AuthorinInnerSideBar>
                    )}
                    <AuthoringInnerBody noPadding={this.props.noPaddingForContent}>
                        {this.props.children}
                    </AuthoringInnerBody>
                </AuthoringMainContent>
            </AuthoringMainContainer>
        );
    }
}
