import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    transparent?: boolean;
}

export class Panel extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('side-panel', {
            'side-panel--transparent': this.props.transparent,
            [`side-panel--${this.props.side}`] : this.props.side,
        });
        return (
            <div className='side-panel__container'>
                <div className={classes}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
