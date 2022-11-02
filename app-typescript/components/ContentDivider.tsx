import * as React from 'react';
import classNames from 'classnames';

interface IProps {
    type?: 'dashed' |'dotted' | 'solid'; // defaults to 'solid'
    orientation?: 'horizontal' |'vertical'; // defaults to 'horizontal'
    align?: 'center' | 'left' | 'right'; // defaults to 'center'
    border?: boolean;
    margin?: 'x-small' | 'small' |'medium' | 'large' | 'none';
    children?: React.ReactNode;
}

export class ContentDivider extends React.PureComponent<IProps> {

    render() {
        let classes = classNames('sd-content-divider', {
            'sd-content-divider--horizontal': this.props.orientation === undefined,
            'sd-content-divider--no-border': this.props.border === false,
            [`sd-content-divider--${this.props.type}`]: this.props.type || this.props.type !== undefined,
            [`sd-content-divider--text-${this.props.align}`]: this.props.align || this.props.align !== undefined,
            [`sd-content-divider--${this.props.orientation}`]:
            this.props.orientation || this.props.orientation !== undefined,
            'sd-content-divider--margin-medium': this.props.margin === undefined,
            [`sd-content-divider--margin-${this.props.margin}`]: this.props.margin || this.props.margin !== undefined,
        });

        if (this.props.children) {
            return (
                <div className={"sd-content-divider--with-text " + classes} role="separator">
                    <span className="sd-content-divider__inner-text">{this.props.children}</span>
                </div>
            );
        }  else {
            return <div className={classes} role="separator"></div>;
        }
    }
}
