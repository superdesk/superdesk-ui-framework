import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    link?: string;
    sizes?: string;
    noTransform?: boolean;
    types?: string;
    typesLabelIcon?: string;
    hollow?: boolean;
    iconLabel?: boolean;
    icon?: string;
}

export class Label extends React.Component<IProps> {
    render() {
        let classes = classNames({
            'label': !this.props.iconLabel,
            'label-icon': this.props.iconLabel,
            [`label--${this.props.sizes}`]: this.props.sizes,
            'label--no-transform': this.props.noTransform,
            [`label--${this.props.types}`]: this.props.types,
            'label--hollow': this.props.hollow,
            [`label-icon--${this.props.typesLabelIcon}`]: this.props.typesLabelIcon,
        });

        return (
            <React.Fragment>
                {this.props.link ? <a href={this.props.link} className={classes}>
                    {this.props.text}
                </a> : <span className={classes}>{this.props.iconLabel ?
                    <i className={'icon-' + this.props.icon}></i> : null}{this.props.text}
                    </span>}
            </React.Fragment>
        );
    }
}
