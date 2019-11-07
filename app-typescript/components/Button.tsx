import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    sizes?: string;
    expanded?: boolean;
    types?: string;
    hollow?: boolean;
    textOnly?: boolean;
    disabled?: boolean;
    icons?: string;
    dark?: boolean;
    iconBtn?: boolean;
    circle?: boolean;
    tooltip?: string;
    flow?: string;
}

export class Button extends React.Component<IProps> {
    render() {
        let classes = classNames({
            'icn-btn': this.props.iconBtn,
            'btn': !this.props.iconBtn,
            'btn--expanded': this.props.expanded,
            [`btn--${this.props.sizes}`]: this.props.sizes,
            [`btn--${this.props.types}`]: this.props.types,
            'btn--hollow': this.props.hollow,
            'btn--text-only': this.props.textOnly,
            'btn--disabled': this.props.disabled,
            'btn--icon-only': !this.props.text,
            'btn--ui-dark': this.props.dark,
            'btn--icon-only-circle': this.props.circle,
        });

        return (
            <React.Fragment>
                <button className={classes}
                    data-sd-tooltip={this.props.tooltip ? this.props.tooltip : null}
                    data-flow={this.props.flow}>
                    {this.props.icons ? <i className={'icon-' + this.props.icons}></i> : null}
                    {this.props.text}
                </button>
            </React.Fragment>
        );
    }
}
