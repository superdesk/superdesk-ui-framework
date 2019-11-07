import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text?: string;
    types?: string;
    square?: boolean;
    element?: boolean;
}

export class Badge extends React.Component<IProps> {
    render() {
        let classes = classNames('badge', {
            [`badge--${this.props.types}`]: this.props.types,
            'badge--square': this.props.square,
        });

        return (
            <React.Fragment>
                {this.props.element ? <div className='element-with-badge'>{this.props.children}
                    <span className={classes}>{this.props.text}</span>
                    </div> : <span className={classes}>{this.props.text}</span>}
            </React.Fragment>
        );
    }
}
