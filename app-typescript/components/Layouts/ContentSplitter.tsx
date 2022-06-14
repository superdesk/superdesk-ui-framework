import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    background?: 'transparent' | 'light' | 'grey' | 'dark';
    visible?: boolean; // defaults to light (white) 
}

export class ContentSplitter extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-content-wrapper__content-splitter', {
            [`sd-content-wrapper__content-splitter--${this.props.background}`]: this.props.background !== 'light' && this.props.background !== undefined,
            'content-splitter--visible': this.props.visible,
        });
        return (
            <div className={classes}>
                {this.props.children}
            </div>
        );
    }
}