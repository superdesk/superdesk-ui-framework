import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'lighter' | 'darker';
    children?: React.ReactNode;
}

export class SubNav extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('subnav',{
            'subnav-darker': this.props.color,
        });

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}
