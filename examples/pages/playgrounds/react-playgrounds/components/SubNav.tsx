import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    color?: 'lighter' | 'darker';
    children?: React.ReactNode;
}

export class SubNav extends React.Component<IProps> {
    render() {
        let classes = classNames({
            'subnav-darker': this.props.color,
        });

        return (
            <div className='subnav'>
                {this.props.children}
            </div>
        );
    }
}
