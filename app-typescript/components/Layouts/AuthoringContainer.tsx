import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    children?: React.ReactNode;
    side?: 'left' | 'right';
    background?: 'transparent' | 'light' | 'grey' | 'dark';
    open?: boolean;
    large?: boolean;
}

export class AuthoringContainer extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('sd-content-wrapper__authoring-content-area', {
            [`sd-content-wrapper__authoring-content-area--${this.props.side}`] : this.props.side,
            [`sd-content-wrapper__authoring-content-area--${this.props.background}`]:
            this.props.background !== 'light' && this.props.background !== undefined,
            'open-editor': this.props.open,
        });

        let classesContainerInner = classNames('sd-editor__container', {
            [`sd-editor__container--large`]: this.props.large,
        });

        return (
            <div className={classes}>
                <div className='sd-editor__container-wrapper'>
                    <div className={classesContainerInner}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
