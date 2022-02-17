import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    id?: string;
    children?: React.ReactNode;
    className?: string;
    display?: 'flex' | 'inline-flex' | 'block';
    direction?: 'row' | 'column';
    gap?: 'none' | 'small' |  'medium' | 'large';
    theme?: 'light' | 'dark';
}

export class Container extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-container', {
            'sd-container--flex': this.props.display === undefined,
            [`sd-container--${this.props.display}`]: this.props.display || this.props.display !== undefined,
            'sd-container--gap-none': this.props.gap === undefined,
            [`sd-container--gap-${this.props.gap}`]: this.props.gap && this.props.display !== 'block',
            [`sd-container--direction-${this.props.direction}`]: this.props.direction && this.props.display !== 'block',
        }, this.props.className);

        return (
            <div className={classes} data-theme={`${this.props.theme}-ui` || ''} id={this.props.id || undefined}>
                {this.props.children}
            </div>
        );
    }
}
