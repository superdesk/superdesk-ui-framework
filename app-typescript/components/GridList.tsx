import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    size?: 'x-small' |'small' | 'medium' | 'large'; // defaults to 'small'
    margin?: '0' | '1' | '2' | '3';
    gap?: 'small' | 'medium' | 'large' | 'x-large';
}

export class GridList extends React.PureComponent<IProps> {
    static defaultProps = {
        size: 'small',
        gap: 'small',
    };

    render() {
        let classes = classNames('sd-grid-list', [
            `sd-grid-list--${this.props.size}`,
            `sd-grid-list--gap-${this.props.gap}`,
            {
                [`sd-margin--${this.props.margin}`]: this.props.margin,
            },
        ]);

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
