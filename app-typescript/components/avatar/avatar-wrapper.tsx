import * as React from 'react';
import classNames from 'classnames';
import {Icon} from '../Icon';

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
    emptyLight?: boolean;
    icon?: {
        name: string;
        color?: string;
    };
    coverageStatus?: {
        color?: string;
    };

}

/**
 * @deprecated use AvatarV2
 */
export class AvatarWrapper extends React.PureComponent<IPropsAvatarWrapper> {
    render() {
        const {icon} = this.props;
        const {coverageStatus} = this.props;


        return (
            <span
                className={classNames('sd-avatar', {
                    'sd-avatar--x-small': this.props.size === 'x-small',
                    'sd-avatar--small': this.props.size === 'small',
                    'sd-avatar--medium': this.props.size === 'medium' || this.props.size == null,
                    'sd-avatar--large': this.props.size === 'large',
                    'sd-avatar--x-large': this.props.size === 'x-large',
                    'sd-avatar--xx-large': this.props.size === 'xx-large',
                    'sd-avatar--indicator-status--online' : this.props.statusIndicator?.status === 'online',
                    'sd-avatar--indicator-status--offline' : this.props.statusIndicator?.status === 'offline',
                    'sd-avatar--empty-light': this.props.emptyLight,
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

                {
                    icon != null && (
                        <span className="sd-avatar__icon">
                            <Icon name={icon.name} color={icon.color} />
                        </span>
                    )
                }

                {
                    coverageStatus != null && (
                        <span style={{backgroundColor: coverageStatus.color}} className="sd-avatar__coverage-state"></span>
                    )
                }

            </span>
        );
    }
}
