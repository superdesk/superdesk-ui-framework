import * as React from 'react';
import classNames from 'classnames';

interface IBase {
    tooltipText?: string;
}

interface IImageAvatar extends IBase {
    imageUrl?: string; // defaults to a placeholder image
}

interface ITextAvatar extends IBase {
    text: string; // limited to 3 characters
}

export class AvatarContentText extends React.PureComponent<ITextAvatar> {
    render() {
        return (
            <span
                className="avatar-content avatar-content--text"
                title={this.props.tooltipText}
            >
                <span>{this.props.text.slice(0, 3)}</span>
            </span>
        );
    }
}

export class AvatarContentImage extends React.PureComponent<IImageAvatar> {
    render() {
        if (this.props.imageUrl == null) {
            return <span className="avatar-content avatar-content--empty" title={this.props.tooltipText} />;
        } else {
            return (
                <span className="avatar-content" title={this.props.tooltipText} >
                    <img src={this.props.imageUrl} />
                </span>
            );
        }
    }
}

interface IPropsAvatarWrapper {
    size?: 'small' | 'medium' | 'large'; // defaults to medium
    statusIndicator?: {
        status: 'online' | 'offline';
        tooltipText?: string;
    };
    administratorIndicator?: {
        enabled: boolean;
        tooltipText?: string;
    };
    children: React.ReactNode;
    'data-test-id'?: string;
}

export class AvatarWrapper extends React.PureComponent<IPropsAvatarWrapper> {
    render() {
        return (
            <span
                className={classNames('avatar', {
                    'avatar--small': this.props.size === 'small',
                    'avatar--medium': this.props.size === 'medium' || this.props.size == null,
                    'avatar--large': this.props.size === 'large',
                })}
                data-test-id={this.props['data-test-id']}
            >
                {this.props.children}

                {
                    this.props.statusIndicator != null
                        ? (
                            <span
                                className={
                                    this.props.statusIndicator.status === 'online'
                                        ? 'avatar--indicator-status--online'
                                        : 'avatar--indicator-status--offline'
                                }
                                title={this.props.statusIndicator.tooltipText}
                            />
                        )
                        : null
                }

                {
                    this.props.administratorIndicator?.enabled === true
                        ? (
                            <i
                                className="icon-settings avatar--indicator-admin"
                                title={this.props.administratorIndicator.tooltipText}
                            />
                        )
                        : null
                }

            </span>
        );
    }
}
