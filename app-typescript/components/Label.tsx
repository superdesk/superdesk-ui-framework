import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    icon?: string; // https://ui-framework.superdesk.org/#/components/icons
    color?: string;  //  https://ui-framework.superdesk.org/#/components/colors
    size?: 'small' | 'normal' | 'large';
    onClick?(): void;
    noTransform?: boolean;
    style?: 'filled' | 'hollow';
    iconLabel?: boolean;
    typesLabelIcon?: string;
}

export class Label extends React.Component<IProps> {
    render() {
        let classes = classNames({
            'label': !this.props.iconLabel,
            'label-icon': this.props.iconLabel,
            [`label--${this.props.size}`]: this.props.size,
            'label--no-transform': this.props.noTransform,
            [`label--${this.props.color}`]: this.props.color,
            'label--hollow': this.props.style === 'hollow',
            [`label-icon--${this.props.typesLabelIcon}`]: this.props.typesLabelIcon,
        });

        return (
            <React.Fragment>
                {this.props.onClick ? <a href='' className={classes}>
                    {this.props.text}
                </a> : <span className={classes}>{this.props.iconLabel ?
                    <i className={'icon-' + this.props.icon}></i> : null}{this.props.text}
                    </span>}
            </React.Fragment>
        );
    }
}
