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
    toolBar: React.ReactNode;
    authoringMain?: React.ReactNode;
    authoringHeader?: React.ReactNode;
    authoringBookmarks?: React.ReactNode;
    headerCollapsed?: boolean;
}

export class AuthoringMain extends React.PureComponent<IProps> {
    render() {
        return (
            <AuthoringMainContainer>
                <AuthoringMainToolBar>
                    {this.props.toolBar}
                </AuthoringMainToolBar>
                <AuthoringMainContent>
                    <AuthoringInnerHeader>
                        {this.props.authoringHeader}
                    </AuthoringInnerHeader>

                    {this.props.authoringBookmarks && (
                        <AuthorinInnerSideBar>
                            {this.props.authoringBookmarks}
                        </AuthorinInnerSideBar>
                    )}

                    <AuthoringInnerBody>
                        {this.props.children}
                    </AuthoringInnerBody>
                </AuthoringMainContent>
            </AuthoringMainContainer>
        );
    }
}
