import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: string;
    zIndex?: number;
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('subnav', {
            [this.props.color]: this.props.color,
        });
        let style = {
          zIndex: 1000 + this.props.zIndex,
        };
        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}
