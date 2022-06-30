import * as React from 'react';
import classNames from 'classnames';
import { IconButton} from '../IconButton';

interface IPropsContainer {
    children?: React.ReactNode;
    id?: string;
    theme?: 'light' | 'dark';
    open?: boolean;
}
class NotificationPanelContainer extends React.PureComponent<IPropsContainer> {
    render() {
        let classes = classNames('sd-notification-panel', {
            [`sd-notification-panel--open`]: this.props.open,
        });
        return (
            <div id={this.props.id}
                aria-labelledby='notifications_title'
                className={classes}
                data-theme={this.props.theme ? `${this.props.theme}-ui` : null}>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsHeader {
    headerTitle?: string;
    onClick(): void;
}
class NotificationPanelHeader extends React.PureComponent<IPropsHeader> {
    render() {
        return (
            <div className='sd-notification-panel__header'>
                <h3 id='notifications_title' className='sd-notification-panel__title'>{this.props.headerTitle}</h3>
                <IconButton toolTipFlow='left' ariaValue='Close' icon='close-small' onClick={() => this.props.onClick()} />
            </div>
        );
    }
}
interface IPropsContent {
    children?: React.ReactNode;
}
class NotificationPanelContent extends React.PureComponent<IPropsContent> {
    render() {
        return (
            <div className='sd-notification-panel__content'>
                {this.props.children}
            </div>
        );
    }
}
interface IPropsFooter {
    children?: React.ReactNode;
    footerContent?: boolean;
}
class NotificationPanelFooter extends React.PureComponent<IPropsFooter> {
    render() {
        return (
            <div className='sd-notification-panel__footer'>
                {this.props.children}
            </div>
        );
    }
}

interface IProps {
    header: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    headerTitle?: string;
    poweredBy?: string;
    footerContent?: boolean;
    open?: boolean;
    theme?: 'light' | 'dark';
    onClick(): void;
}

export default class NotificationPanel extends React.PureComponent<IProps> {
    render() {
        return (
            <NotificationPanelContainer open={this.props.open} theme={this.props.theme}>
                <NotificationPanelHeader headerTitle={this.props.headerTitle} onClick={() => this.props.onClick()}>
                    {this.props.header}
                </NotificationPanelHeader>
                <NotificationPanelContent>
                    {this.props.children}
                </NotificationPanelContent>
                {this.props.footer && (
                    <NotificationPanelFooter>
                        {this.props.footer}
                    </NotificationPanelFooter>
                )}
            </NotificationPanelContainer>
        );
    }
}

export {
    NotificationPanel, NotificationPanelContainer, NotificationPanelHeader, NotificationPanelContent, NotificationPanelFooter
};
