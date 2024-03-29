import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    text: string;
    onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    children?: React.ReactNode;
    disabled?: boolean;
}

export class IllustrationButton extends React.PureComponent<IProps> {
    render() {
        let classes = classNames('illustration-button', {
            'illustration-button--disabled': this.props.disabled
        });
        return (
            <button 
                className={classes}
                tabIndex={0}
                onClick={this.props.onClick}
            >
                {this.props.children}
                <span className='illustration-button__text-label'>
                    {this.props.text}
                </span>
            </button>
        );
    }
}
