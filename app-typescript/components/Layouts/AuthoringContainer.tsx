import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    background?: 'transparent' | 'light' | 'grey' | 'dark';
    open?: boolean; 
}

export class AuthoringContainer extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-content-wrapper__authoring-content-area', {
            [`sd-content-wrapper__authoring-content-area--${this.props.side}`] : this.props.side,
            [`sd-content-wrapper__authoring-content-area--${this.props.background}`]: this.props.background !== 'light' && this.props.background !== undefined,
            'open-editor': this.props.open,
        });
        return (
            <div className={classes}>
                <div className='sd-editor__container'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}