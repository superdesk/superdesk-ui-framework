import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../../app-typescript';

interface IBase {
    tooltipText?: string;
}

interface IImageAvatar extends IBase {
    imageUrl?: string; // defaults to a placeholder image
}

interface ITextAvatar extends IBase {
    text: string; // limited to 3 characters
}
interface INumberAvatar extends IBase {
    number: string;
}
interface IIconAvatar extends IBase {
    status?: 'default' | 'in-progress' | 'done';  // defaults to default
    type?: 'text' | 'photo' | 'video' | 'audio' | 'file' | 'post' | 'post' | 'list-alt' | 'graphic';
    canceled?: boolean;
    className?: string;
}
export class AvatarContentText extends React.PureComponent<ITextAvatar> {
    render() {
        return (
            <span
                className="sd-avatar-content sd-avatar-content--text"
                title={this.props.tooltipText}
            >
                <span>{this.props.text.slice(0, 3)}</span>
            </span>
        );
    }
}

export class AvatarContentAdd extends React.PureComponent<IImageAvatar> {
    render() {
        return (
            <span className="sd-avatar-content sd-avatar-content--add-item" title={this.props.tooltipText} />
        );
    }
}

export class AvatarContentImage extends React.PureComponent<IImageAvatar> {
    render() {
        if (this.props.imageUrl == null) {
            return (
                <span className="sd-avatar-content sd-avatar-content--dummy-img" title={this.props.tooltipText}>
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="100" fill="white" fill-opacity="0.01"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 153V145.384C40 141.557 41.16 137.981 43.16 135C49.14 126.057 66.24 119.711 77.14 118C82.74 117.115 90.16 116.538 100 116.538C109.84 116.538 117.26 117.115 122.86 118C133.76 119.711 150.86 126.057 156.84 135C158.84 137.981 160 141.557 160 145.384V153C150 165 130 180 100 180C70 180 50 165 40 153ZM100 30C122.08 30 140 47.2307 140 68.4614C140 89.6922 122.08 106.923 100 106.923C77.92 106.923 60 89.6922 60 68.4614C60 47.2307 77.92 30 100 30Z" fill="var(--sd-colour-avatar-dummy)" fill-opacity="1"/>
                    </svg>
                </span>);
        } else {
            return (
                <span className="sd-avatar-content" title={this.props.tooltipText} >
                    <img src={this.props.imageUrl} />
                </span>
            );
        }
    }
}
export class AvatarContentNumber extends React.PureComponent<INumberAvatar> {
    render() {
        return (
            <span className="sd-avatar-content sd-avatar-content--number">
                <span>+{this.props.number}</span>
            </span>
        );
    }
}
export class AvatarContentIcon extends React.PureComponent<IIconAvatar> {
    render() {
        let classes = classNames('sd-avatar__icon', {
            [`sd-avatar__icon--state-${this.props.status}`]: this.props.status,
            [`sd-avatar__icon--state-default`]: this.props.status === undefined,
            [`sd-avatar__icon--state-canceled`]: this.props.canceled,
        }, this.props.className);
        return (
            <span className={classes}>
                <Icon name={this.props.canceled ? `${this.props.type}-cancel` : this.props.type} />
            </span>
        );
    }
}

interface IPropsAvatarGroup {
    appearance?: 'stacked' | 'grid';
    borderColor?: '000' | '050' | '100' | '150' | '200';
    className?: string;
    children: React.ReactNode;
    gap?: 'none' | 'small'| 'medium'| 'large';
}

export class AvatarGroup extends React.PureComponent<IPropsAvatarGroup> {
    render() {
        let classes = classNames('sd-avatar-group', {
            [`sd-avatar-group--stacked`]: this.props.appearance === undefined,
            [`sd-avatar-group--${this.props.appearance}`]: this.props.appearance,
            [`sd-avatar-group__border--000`]: this.props.borderColor === undefined,
            [`sd-avatar-group__border--${this.props.borderColor}`]: this.props.borderColor,
            [`sd-avatar-group--stacked--gap-${this.props.gap}`]: this.props.gap,
        }, this.props.className);
        return (
            <div className={classes} role='group'>
                {this.props.children}
            </div>
        );
    }
}

interface IPropsAvatarWrapper {
    size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';  // defaults to medium
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
    isEmpty?: boolean;
    isAddButton?: boolean;

}

export class AvatarWrapper extends React.PureComponent<IPropsAvatarWrapper> {
    render() {
        return (
            <span
                className={classNames('sd-avatar', {
                    'sd-avatar--x-small': this.props.size === 'x-small',
                    'sd-avatar--small': this.props.size === 'small',
                    'sd-avatar--medium': this.props.size === 'medium' || this.props.size == null,
                    'sd-avatar--large': this.props.size === 'large',
                    'sd-avatar--x-large': this.props.size === 'x-large',
                    'sd-avatar--xx-large': this.props.size === 'xx-large',
                    'sd-avatar--indicator-status--online' : this.props.statusIndicator != null && this.props.statusIndicator.status === 'online',
                    'sd-avatar--indicator-status--offline' : this.props.statusIndicator != null && this.props.statusIndicator.status === 'offline',
                    'sd-avatar--empty-light': this.props.isEmpty,
                })}
                data-test-id={this.props['data-test-id']}
                title={this.props.statusIndicator != null ? this.props.statusIndicator.tooltipText : ""}
            >
                {this.props.children}

                {
                    this.props.administratorIndicator?.enabled === true
                        ? (
                            <i
                                className="icon-settings sd-avatar--indicator-admin"
                                title={this.props.administratorIndicator.tooltipText}
                            />
                        )
                        : null
                }

            </span>
        );
    }
}
