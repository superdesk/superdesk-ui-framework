import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    link?: string;
    sizes?: string;
    noTransform?: boolean;
    types?: string;
    hollow?: boolean;
}

export class Label extends React.Component<IProps> {
    render() {
        let classes = classNames('label', {
            [`label--${this.props.sizes}`]: this.props.sizes,
            'label--no-transform': this.props.noTransform,
            [`label--${this.props.types}`]: this.props.types,
            'label--hollow': this.props.hollow,
        });

        return (
            <React.Fragment>
                {this.props.link ? <a href={this.props.link} className={classes}>
                    {this.props.text}
                    </a> : <span className={classes}>{this.props.text}
                    </span>}
            </React.Fragment>
        );
    }
}
